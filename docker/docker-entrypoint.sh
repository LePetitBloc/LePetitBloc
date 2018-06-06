#!/bin/sh
set -e

if [ ! -f yarn.lock ]; then
    yarn install
    yarn start
else
    yarn start
fi

exec docker-entrypoint
