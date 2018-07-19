DOCKER_COMPOSE = docker-compose
DOCKER_ENV ?= prod

YARN = $(DOCKER_COMPOSE) exec app yarn

##
##Project
##-------
##

build: ## Build the project
	$(DOCKER_COMPOSE) build

kill:
	$(DOCKER_COMPOSE) stop
	$(DOCKER_COMPOSE) rm -f
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

install: ## Install and start the project
install: build start

reset: ## Stop and start a fresh install of the project
reset: kill install

start: ## Start the project
ifeq ($(DOCKER_ENV), prod)
	$(DOCKER_COMPOSE) up -d
else
	$(DOCKER_COMPOSE) up
endif

stop: ## Stop the project
	$(DOCKER_COMPOSE) stop

no-docker:
	$(eval DOCKER_COMPOSE := \#)

yarn-upgrade: ## Upgrade dependencies
yarn-upgrade:
	$(YARN) upgrade

yarn-build: ## Build and deploy project on your host
deploy:
	yarn deploy

docker-logs: ## Read the docker logs
	$(DOCKER_COMPOSE) logs -f

.PHONY: kill install reset start stop clean deploy no-docker build

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.PHONY: help
