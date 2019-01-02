#!/bin/sh
set -e

npm install
npm start

exec docker-entrypoint
