// package: inference
// file: grpc_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as grpc_service_pb from "./grpc_service_pb";
import * as model_config_pb from "./model_config_pb";

interface IGRPCInferenceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    serverLive: IGRPCInferenceServiceService_IServerLive;
    serverReady: IGRPCInferenceServiceService_IServerReady;
    modelReady: IGRPCInferenceServiceService_IModelReady;
    serverMetadata: IGRPCInferenceServiceService_IServerMetadata;
    modelMetadata: IGRPCInferenceServiceService_IModelMetadata;
    modelInfer: IGRPCInferenceServiceService_IModelInfer;
    modelStreamInfer: IGRPCInferenceServiceService_IModelStreamInfer;
    modelConfig: IGRPCInferenceServiceService_IModelConfig;
    modelStatistics: IGRPCInferenceServiceService_IModelStatistics;
    repositoryIndex: IGRPCInferenceServiceService_IRepositoryIndex;
    repositoryModelLoad: IGRPCInferenceServiceService_IRepositoryModelLoad;
    repositoryModelUnload: IGRPCInferenceServiceService_IRepositoryModelUnload;
    systemSharedMemoryStatus: IGRPCInferenceServiceService_ISystemSharedMemoryStatus;
    systemSharedMemoryRegister: IGRPCInferenceServiceService_ISystemSharedMemoryRegister;
    systemSharedMemoryUnregister: IGRPCInferenceServiceService_ISystemSharedMemoryUnregister;
    cudaSharedMemoryStatus: IGRPCInferenceServiceService_ICudaSharedMemoryStatus;
    cudaSharedMemoryRegister: IGRPCInferenceServiceService_ICudaSharedMemoryRegister;
    cudaSharedMemoryUnregister: IGRPCInferenceServiceService_ICudaSharedMemoryUnregister;
    traceSetting: IGRPCInferenceServiceService_ITraceSetting;
    logSettings: IGRPCInferenceServiceService_ILogSettings;
}

interface IGRPCInferenceServiceService_IServerLive extends grpc.MethodDefinition<grpc_service_pb.ServerLiveRequest, grpc_service_pb.ServerLiveResponse> {
    path: "/inference.GRPCInferenceService/ServerLive";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ServerLiveRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ServerLiveRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ServerLiveResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ServerLiveResponse>;
}
interface IGRPCInferenceServiceService_IServerReady extends grpc.MethodDefinition<grpc_service_pb.ServerReadyRequest, grpc_service_pb.ServerReadyResponse> {
    path: "/inference.GRPCInferenceService/ServerReady";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ServerReadyRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ServerReadyRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ServerReadyResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ServerReadyResponse>;
}
interface IGRPCInferenceServiceService_IModelReady extends grpc.MethodDefinition<grpc_service_pb.ModelReadyRequest, grpc_service_pb.ModelReadyResponse> {
    path: "/inference.GRPCInferenceService/ModelReady";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelReadyRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelReadyRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelReadyResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelReadyResponse>;
}
interface IGRPCInferenceServiceService_IServerMetadata extends grpc.MethodDefinition<grpc_service_pb.ServerMetadataRequest, grpc_service_pb.ServerMetadataResponse> {
    path: "/inference.GRPCInferenceService/ServerMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ServerMetadataRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ServerMetadataRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ServerMetadataResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ServerMetadataResponse>;
}
interface IGRPCInferenceServiceService_IModelMetadata extends grpc.MethodDefinition<grpc_service_pb.ModelMetadataRequest, grpc_service_pb.ModelMetadataResponse> {
    path: "/inference.GRPCInferenceService/ModelMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelMetadataRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelMetadataRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelMetadataResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelMetadataResponse>;
}
interface IGRPCInferenceServiceService_IModelInfer extends grpc.MethodDefinition<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelInferResponse> {
    path: "/inference.GRPCInferenceService/ModelInfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelInferRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelInferRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelInferResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelInferResponse>;
}
interface IGRPCInferenceServiceService_IModelStreamInfer extends grpc.MethodDefinition<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse> {
    path: "/inference.GRPCInferenceService/ModelStreamInfer";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelInferRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelInferRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelStreamInferResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelStreamInferResponse>;
}
interface IGRPCInferenceServiceService_IModelConfig extends grpc.MethodDefinition<grpc_service_pb.ModelConfigRequest, grpc_service_pb.ModelConfigResponse> {
    path: "/inference.GRPCInferenceService/ModelConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelConfigRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelConfigRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelConfigResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelConfigResponse>;
}
interface IGRPCInferenceServiceService_IModelStatistics extends grpc.MethodDefinition<grpc_service_pb.ModelStatisticsRequest, grpc_service_pb.ModelStatisticsResponse> {
    path: "/inference.GRPCInferenceService/ModelStatistics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.ModelStatisticsRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.ModelStatisticsRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.ModelStatisticsResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.ModelStatisticsResponse>;
}
interface IGRPCInferenceServiceService_IRepositoryIndex extends grpc.MethodDefinition<grpc_service_pb.RepositoryIndexRequest, grpc_service_pb.RepositoryIndexResponse> {
    path: "/inference.GRPCInferenceService/RepositoryIndex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.RepositoryIndexRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.RepositoryIndexRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.RepositoryIndexResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.RepositoryIndexResponse>;
}
interface IGRPCInferenceServiceService_IRepositoryModelLoad extends grpc.MethodDefinition<grpc_service_pb.RepositoryModelLoadRequest, grpc_service_pb.RepositoryModelLoadResponse> {
    path: "/inference.GRPCInferenceService/RepositoryModelLoad";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.RepositoryModelLoadRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.RepositoryModelLoadRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.RepositoryModelLoadResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.RepositoryModelLoadResponse>;
}
interface IGRPCInferenceServiceService_IRepositoryModelUnload extends grpc.MethodDefinition<grpc_service_pb.RepositoryModelUnloadRequest, grpc_service_pb.RepositoryModelUnloadResponse> {
    path: "/inference.GRPCInferenceService/RepositoryModelUnload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.RepositoryModelUnloadRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.RepositoryModelUnloadRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.RepositoryModelUnloadResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.RepositoryModelUnloadResponse>;
}
interface IGRPCInferenceServiceService_ISystemSharedMemoryStatus extends grpc.MethodDefinition<grpc_service_pb.SystemSharedMemoryStatusRequest, grpc_service_pb.SystemSharedMemoryStatusResponse> {
    path: "/inference.GRPCInferenceService/SystemSharedMemoryStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryStatusRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryStatusRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryStatusResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryStatusResponse>;
}
interface IGRPCInferenceServiceService_ISystemSharedMemoryRegister extends grpc.MethodDefinition<grpc_service_pb.SystemSharedMemoryRegisterRequest, grpc_service_pb.SystemSharedMemoryRegisterResponse> {
    path: "/inference.GRPCInferenceService/SystemSharedMemoryRegister";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryRegisterRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryRegisterRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryRegisterResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryRegisterResponse>;
}
interface IGRPCInferenceServiceService_ISystemSharedMemoryUnregister extends grpc.MethodDefinition<grpc_service_pb.SystemSharedMemoryUnregisterRequest, grpc_service_pb.SystemSharedMemoryUnregisterResponse> {
    path: "/inference.GRPCInferenceService/SystemSharedMemoryUnregister";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryUnregisterRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryUnregisterRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.SystemSharedMemoryUnregisterResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.SystemSharedMemoryUnregisterResponse>;
}
interface IGRPCInferenceServiceService_ICudaSharedMemoryStatus extends grpc.MethodDefinition<grpc_service_pb.CudaSharedMemoryStatusRequest, grpc_service_pb.CudaSharedMemoryStatusResponse> {
    path: "/inference.GRPCInferenceService/CudaSharedMemoryStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryStatusRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryStatusRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryStatusResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryStatusResponse>;
}
interface IGRPCInferenceServiceService_ICudaSharedMemoryRegister extends grpc.MethodDefinition<grpc_service_pb.CudaSharedMemoryRegisterRequest, grpc_service_pb.CudaSharedMemoryRegisterResponse> {
    path: "/inference.GRPCInferenceService/CudaSharedMemoryRegister";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryRegisterRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryRegisterRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryRegisterResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryRegisterResponse>;
}
interface IGRPCInferenceServiceService_ICudaSharedMemoryUnregister extends grpc.MethodDefinition<grpc_service_pb.CudaSharedMemoryUnregisterRequest, grpc_service_pb.CudaSharedMemoryUnregisterResponse> {
    path: "/inference.GRPCInferenceService/CudaSharedMemoryUnregister";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryUnregisterRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryUnregisterRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.CudaSharedMemoryUnregisterResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.CudaSharedMemoryUnregisterResponse>;
}
interface IGRPCInferenceServiceService_ITraceSetting extends grpc.MethodDefinition<grpc_service_pb.TraceSettingRequest, grpc_service_pb.TraceSettingResponse> {
    path: "/inference.GRPCInferenceService/TraceSetting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.TraceSettingRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.TraceSettingRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.TraceSettingResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.TraceSettingResponse>;
}
interface IGRPCInferenceServiceService_ILogSettings extends grpc.MethodDefinition<grpc_service_pb.LogSettingsRequest, grpc_service_pb.LogSettingsResponse> {
    path: "/inference.GRPCInferenceService/LogSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<grpc_service_pb.LogSettingsRequest>;
    requestDeserialize: grpc.deserialize<grpc_service_pb.LogSettingsRequest>;
    responseSerialize: grpc.serialize<grpc_service_pb.LogSettingsResponse>;
    responseDeserialize: grpc.deserialize<grpc_service_pb.LogSettingsResponse>;
}

export const GRPCInferenceServiceService: IGRPCInferenceServiceService;

export interface IGRPCInferenceServiceServer extends grpc.UntypedServiceImplementation {
    serverLive: grpc.handleUnaryCall<grpc_service_pb.ServerLiveRequest, grpc_service_pb.ServerLiveResponse>;
    serverReady: grpc.handleUnaryCall<grpc_service_pb.ServerReadyRequest, grpc_service_pb.ServerReadyResponse>;
    modelReady: grpc.handleUnaryCall<grpc_service_pb.ModelReadyRequest, grpc_service_pb.ModelReadyResponse>;
    serverMetadata: grpc.handleUnaryCall<grpc_service_pb.ServerMetadataRequest, grpc_service_pb.ServerMetadataResponse>;
    modelMetadata: grpc.handleUnaryCall<grpc_service_pb.ModelMetadataRequest, grpc_service_pb.ModelMetadataResponse>;
    modelInfer: grpc.handleUnaryCall<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelInferResponse>;
    modelStreamInfer: grpc.handleBidiStreamingCall<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    modelConfig: grpc.handleUnaryCall<grpc_service_pb.ModelConfigRequest, grpc_service_pb.ModelConfigResponse>;
    modelStatistics: grpc.handleUnaryCall<grpc_service_pb.ModelStatisticsRequest, grpc_service_pb.ModelStatisticsResponse>;
    repositoryIndex: grpc.handleUnaryCall<grpc_service_pb.RepositoryIndexRequest, grpc_service_pb.RepositoryIndexResponse>;
    repositoryModelLoad: grpc.handleUnaryCall<grpc_service_pb.RepositoryModelLoadRequest, grpc_service_pb.RepositoryModelLoadResponse>;
    repositoryModelUnload: grpc.handleUnaryCall<grpc_service_pb.RepositoryModelUnloadRequest, grpc_service_pb.RepositoryModelUnloadResponse>;
    systemSharedMemoryStatus: grpc.handleUnaryCall<grpc_service_pb.SystemSharedMemoryStatusRequest, grpc_service_pb.SystemSharedMemoryStatusResponse>;
    systemSharedMemoryRegister: grpc.handleUnaryCall<grpc_service_pb.SystemSharedMemoryRegisterRequest, grpc_service_pb.SystemSharedMemoryRegisterResponse>;
    systemSharedMemoryUnregister: grpc.handleUnaryCall<grpc_service_pb.SystemSharedMemoryUnregisterRequest, grpc_service_pb.SystemSharedMemoryUnregisterResponse>;
    cudaSharedMemoryStatus: grpc.handleUnaryCall<grpc_service_pb.CudaSharedMemoryStatusRequest, grpc_service_pb.CudaSharedMemoryStatusResponse>;
    cudaSharedMemoryRegister: grpc.handleUnaryCall<grpc_service_pb.CudaSharedMemoryRegisterRequest, grpc_service_pb.CudaSharedMemoryRegisterResponse>;
    cudaSharedMemoryUnregister: grpc.handleUnaryCall<grpc_service_pb.CudaSharedMemoryUnregisterRequest, grpc_service_pb.CudaSharedMemoryUnregisterResponse>;
    traceSetting: grpc.handleUnaryCall<grpc_service_pb.TraceSettingRequest, grpc_service_pb.TraceSettingResponse>;
    logSettings: grpc.handleUnaryCall<grpc_service_pb.LogSettingsRequest, grpc_service_pb.LogSettingsResponse>;
}

export interface IGRPCInferenceServiceClient {
    serverLive(request: grpc_service_pb.ServerLiveRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    serverLive(request: grpc_service_pb.ServerLiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    serverLive(request: grpc_service_pb.ServerLiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    serverReady(request: grpc_service_pb.ServerReadyRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    serverReady(request: grpc_service_pb.ServerReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    serverReady(request: grpc_service_pb.ServerReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    modelReady(request: grpc_service_pb.ModelReadyRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    modelReady(request: grpc_service_pb.ModelReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    modelReady(request: grpc_service_pb.ModelReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    serverMetadata(request: grpc_service_pb.ServerMetadataRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    serverMetadata(request: grpc_service_pb.ServerMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    serverMetadata(request: grpc_service_pb.ServerMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    modelMetadata(request: grpc_service_pb.ModelMetadataRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    modelMetadata(request: grpc_service_pb.ModelMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    modelMetadata(request: grpc_service_pb.ModelMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    modelInfer(request: grpc_service_pb.ModelInferRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    modelInfer(request: grpc_service_pb.ModelInferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    modelInfer(request: grpc_service_pb.ModelInferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    modelStreamInfer(): grpc.ClientDuplexStream<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    modelStreamInfer(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    modelStreamInfer(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    modelConfig(request: grpc_service_pb.ModelConfigRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    modelConfig(request: grpc_service_pb.ModelConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    modelConfig(request: grpc_service_pb.ModelConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    traceSetting(request: grpc_service_pb.TraceSettingRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    traceSetting(request: grpc_service_pb.TraceSettingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    traceSetting(request: grpc_service_pb.TraceSettingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    logSettings(request: grpc_service_pb.LogSettingsRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
    logSettings(request: grpc_service_pb.LogSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
    logSettings(request: grpc_service_pb.LogSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
}

export class GRPCInferenceServiceClient extends grpc.Client implements IGRPCInferenceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public serverLive(request: grpc_service_pb.ServerLiveRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    public serverLive(request: grpc_service_pb.ServerLiveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    public serverLive(request: grpc_service_pb.ServerLiveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerLiveResponse) => void): grpc.ClientUnaryCall;
    public serverReady(request: grpc_service_pb.ServerReadyRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    public serverReady(request: grpc_service_pb.ServerReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    public serverReady(request: grpc_service_pb.ServerReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerReadyResponse) => void): grpc.ClientUnaryCall;
    public modelReady(request: grpc_service_pb.ModelReadyRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    public modelReady(request: grpc_service_pb.ModelReadyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    public modelReady(request: grpc_service_pb.ModelReadyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelReadyResponse) => void): grpc.ClientUnaryCall;
    public serverMetadata(request: grpc_service_pb.ServerMetadataRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    public serverMetadata(request: grpc_service_pb.ServerMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    public serverMetadata(request: grpc_service_pb.ServerMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ServerMetadataResponse) => void): grpc.ClientUnaryCall;
    public modelMetadata(request: grpc_service_pb.ModelMetadataRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    public modelMetadata(request: grpc_service_pb.ModelMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    public modelMetadata(request: grpc_service_pb.ModelMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelMetadataResponse) => void): grpc.ClientUnaryCall;
    public modelInfer(request: grpc_service_pb.ModelInferRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    public modelInfer(request: grpc_service_pb.ModelInferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    public modelInfer(request: grpc_service_pb.ModelInferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelInferResponse) => void): grpc.ClientUnaryCall;
    public modelStreamInfer(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    public modelStreamInfer(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<grpc_service_pb.ModelInferRequest, grpc_service_pb.ModelStreamInferResponse>;
    public modelConfig(request: grpc_service_pb.ModelConfigRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    public modelConfig(request: grpc_service_pb.ModelConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    public modelConfig(request: grpc_service_pb.ModelConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelConfigResponse) => void): grpc.ClientUnaryCall;
    public modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    public modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    public modelStatistics(request: grpc_service_pb.ModelStatisticsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.ModelStatisticsResponse) => void): grpc.ClientUnaryCall;
    public repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    public repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    public repositoryIndex(request: grpc_service_pb.RepositoryIndexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryIndexResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelLoad(request: grpc_service_pb.RepositoryModelLoadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelLoadResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    public repositoryModelUnload(request: grpc_service_pb.RepositoryModelUnloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.RepositoryModelUnloadResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryStatus(request: grpc_service_pb.SystemSharedMemoryStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryRegister(request: grpc_service_pb.SystemSharedMemoryRegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public systemSharedMemoryUnregister(request: grpc_service_pb.SystemSharedMemoryUnregisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.SystemSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryStatus(request: grpc_service_pb.CudaSharedMemoryStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryStatusResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryRegister(request: grpc_service_pb.CudaSharedMemoryRegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryRegisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public cudaSharedMemoryUnregister(request: grpc_service_pb.CudaSharedMemoryUnregisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.CudaSharedMemoryUnregisterResponse) => void): grpc.ClientUnaryCall;
    public traceSetting(request: grpc_service_pb.TraceSettingRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    public traceSetting(request: grpc_service_pb.TraceSettingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    public traceSetting(request: grpc_service_pb.TraceSettingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.TraceSettingResponse) => void): grpc.ClientUnaryCall;
    public logSettings(request: grpc_service_pb.LogSettingsRequest, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
    public logSettings(request: grpc_service_pb.LogSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
    public logSettings(request: grpc_service_pb.LogSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: grpc_service_pb.LogSettingsResponse) => void): grpc.ClientUnaryCall;
}
