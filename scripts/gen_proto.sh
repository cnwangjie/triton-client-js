#!/bin/bash

# change directory to project root
cd "$(dirname "$0")/.."

_INFERENCE_GRPC_PATH="./src/generated/inference"

# generate gprc client and type declarations
mkdir -p $_INFERENCE_GRPC_PATH
protoc --plugin=`which protoc-gen-ts` --ts_out=grpc_js:$_INFERENCE_GRPC_PATH -Iproto ./proto/*.proto
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$_INFERENCE_GRPC_PATH \
  --grpc_out=grpc_js:$_INFERENCE_GRPC_PATH \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  -Iproto \
  ./proto/*.proto
