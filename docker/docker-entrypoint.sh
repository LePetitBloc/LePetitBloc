#!/bin/sh
set -e

yarn install
yarn start

exec docker-entrypoint
