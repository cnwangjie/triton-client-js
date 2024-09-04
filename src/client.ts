import { ChannelCredentials, type ClientDuplexStream } from '@grpc/grpc-js'
import promisify, { type Promisified } from 'promisify-grpc-client'
import { GRPCInferenceServiceClient } from './generated/inference/grpc_service_grpc_pb'
import type {
  ModelInferRequest,
  ModelStreamInferResponse,
} from './generated/inference/grpc_service_pb'

export interface TritonClientOptions {
  url: string
  ssl?: boolean
}

export class TritonGrpcClient {
  client: Promisified<GRPCInferenceServiceClient>

  constructor(public readonly opt: TritonClientOptions) {
    this.client = promisify(
      new GRPCInferenceServiceClient(
        opt.url,
        opt.ssl
          ? ChannelCredentials.createSsl()
          : ChannelCredentials.createInsecure(),
      ),
    )
  }

  protected stream?: ClientDuplexStream<
    ModelInferRequest,
    ModelStreamInferResponse
  >

  protected streamCallbacks = new Map<
    string,
    (res: ModelStreamInferResponse.AsObject) => void
  >()

  protected streamErrorCallbacks = new Set<(err: Error) => void>()

  startStream() {
    if (this.stream) return this.stream

    const stream = this.client.modelStreamInfer({})

    this.stream = stream

    stream.on('data', (data: ModelStreamInferResponse) => {
      const res = data.toObject()
      const id = res.inferResponse?.id
      if (!id) return
      const callback = this.streamCallbacks.get(id)
      if (callback) {
        callback(res)
      }
    })

    stream.on('error', err => {
      for (const callback of this.streamErrorCallbacks) {
        callback(err)
      }
      this.stopStream()
    })

    return stream
  }

  stopStream() {
    this.stream?.end()
    this.stream = undefined
    this.streamCallbacks.clear()
    this.streamErrorCallbacks.clear()
  }

  async asyncStreamInfer(req: ModelInferRequest) {
    const stream = this.stream || this.startStream()

    if (!req.getId()) {
      req.setId(Math.random().toString(36).substring(2))
    }

    const id = req.getId()

    const promise = new Promise<ModelStreamInferResponse.AsObject>(
      (resolve, reject) => {
        const errorCallback = (err: unknown) => {
          reject(err)
          this.streamCallbacks.delete(id)
        }
        this.streamCallbacks.set(id, res => {
          this.streamCallbacks.delete(id)
          resolve(res)
          this.streamErrorCallbacks.delete(errorCallback)
        })
        this.streamErrorCallbacks.add(errorCallback)
      },
    )

    stream.write(req)

    return promise
  }
}
