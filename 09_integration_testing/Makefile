ifeq ($(BUILD),1)
config=-f docker-compose.yml -f docker-compose.build.yml
else
config=-f docker-compose.yml -f docker-compose.dev.yml
endif

install:
	docker-compose run --rm -T app composer install

start:
	docker-compose $(config) up -d

stop:
	docker-compose $(config) down

destroy:
	docker-compose $(config) down -v

test:
ifeq ($(BUILD),1)
	docker-compose $(config) up -d api database
	docker-compose $(config) exec -T database bash -c 'while ! mysqladmin ping -hdatabase -u$$MYSQL_USER -p$$MYSQL_PASSWORD --silent; do sleep 1; done'
	docker-compose $(config) run -T --rm app vendor/bin/phpunit
	docker-compose $(config) down
else
	docker-compose $(config) exec -T app vendor/bin/phpunit
endif
