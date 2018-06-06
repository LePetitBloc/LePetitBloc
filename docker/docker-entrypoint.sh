#!/bin/sh
set -e

if [ ! -f package-lock.json ]; then
    yarn install
    yarn start
else
    yarn start
fi

exec docker-entrypoint
