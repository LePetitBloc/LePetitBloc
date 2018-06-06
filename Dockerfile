FROM node:alpine

RUN apk add --no-cache \
	libc6-compat \
	make

COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

WORKDIR /srv/app
COPY . .

ENTRYPOINT ["docker-entrypoint"]
