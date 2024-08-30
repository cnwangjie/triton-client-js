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

  startStream() {
    if (this.stream) {
      throw new Error('Stream already started')
    }

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
  }

  stopStream() {
    this.stream?.end()
    this.stream = undefined
    this.streamCallbacks.clear()
  }

  async asyncStreamInfer(req: ModelInferRequest) {
    if (!this.stream) {
      throw new Error('Stream not started')
    }

    if (!req.getId()) {
      req.setId(Math.random().toString(36).substring(2))
    }

    const id = req.getId()

    const promise = new Promise<ModelStreamInferResponse.AsObject>(resolve => {
      this.streamCallbacks.set(id, res => {
        this.streamCallbacks.delete(id)
        resolve(res)
      })
    })

    this.stream.write(req)

    return promise
  }
}
