DOCKER_COMPOSE = docker-compose
JS = $(DOCKER_COMPOSE) exec app npm

##
##Project
##-------
##

build:
	$(DOCKER_COMPOSE) up -d --build

kill:
	$(DOCKER_COMPOSE) stop
	$(DOCKER_COMPOSE) rm -f
	$(DOCKER_COMPOSE) down --volumes --remove-orphans

install: ## Install and start the project
install: build start

reset: ## Stop and start a fresh install of the project
reset: kill install

start: ## Start the project
	$(DOCKER_COMPOSE) start

develop: ## Start the project showing logs
	$(DOCKER_COMPOSE) up

stop: ## Stop the project
	$(DOCKER_COMPOSE) stop

no-docker:
	$(eval DOCKER_COMPOSE := \#)

update: ## Upgrade dependencies
update:
	$(JS) update

yarn-build: ## Build and deploy project on your host
deploy:
	$(JS) deploy

.PHONY: kill install reset start stop clean deploy no-docker build develop

.DEFAULT_GOAL := help
help:
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
.PHONY: help
