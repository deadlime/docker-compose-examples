install:
	docker-compose run --rm -T web composer install

start:
	docker-compose up -d

stop:
	docker-compose down

test:
ifeq ($(BUILD),1)
	docker-compose up -d
	docker-compose exec -T browser bash -c 'while ! wget -q -T1 -O/dev/null http://browser:4444/wd/hub; do sleep 1; done'
	docker-compose exec -T web vendor/bin/codecept run
	docker-compose down
else
	docker-compose exec -T web vendor/bin/codecept run
endif
