#!/bin/bash

set -xe

sudo chown node node_modules
sudo apt update

corepack install
corepack enable

pnpm config set store-dir /home/node/.local/share/pnpm/store
pnpm install
