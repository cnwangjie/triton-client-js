#!/bin/bash

# change directory to project root
cd "$(dirname "$0")/.."

rm -rf dist

_INFERENCE_GRPC_PATH="./src/generated/inference"
_DIST_PATH="./dist/cjs/generated/inference"

tsc -p tsconfig.build.json -m ESNext --outDir dist/esm
tsc -p tsconfig.build.json -m commonjs --outDir dist/cjs

mkdir -p $_DIST_PATH
cp -r $_INFERENCE_GRPC_PATH/* $_DIST_PATH

