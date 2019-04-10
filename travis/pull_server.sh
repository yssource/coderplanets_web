#!/bin/bash

export WORKING_DIR=`pwd`
echo "> Working dir: $WORKING_DIR"
pwd
echo "> pull server"
cd ..
git clone https://github.com/coderplanets/coderplanets_server.git
cd coderplanets_server
mix deps.get
echo "> running test server"
MIX_ENV=test mix phx.server
cd ..
pwd
ls -ll
echo "> done"
