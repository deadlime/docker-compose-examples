# Mail server

Catch all SMTP server for development purposes.

Start application:

```
$ docker-compose up
```

Send test e-mail:

```
$ docker-compose run --rm app python send_mail.py
```

The IMAP server is accessible on localhost:143 with "dev" username and "dev" password.
