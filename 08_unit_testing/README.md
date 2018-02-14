# Unit testing

Install dependencies:

```
$ docker-compose run --rm -T app composer install
```

Run tests:

```
$ docker-compose run --rm -T app vendor/bin/phpunit
```
