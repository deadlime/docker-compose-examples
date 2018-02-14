FROM alpine:3.5

RUN apk add --no-cache postfix postfix-pcre rsyslog supervisor

RUN adduser -u 1000 -D dev && \
    mkdir -p /home/dev/Maildir && \
    chown -R dev:dev /home/dev

COPY ./etc /etc

RUN touch /etc/aliases && \
    postalias /etc/aliases

EXPOSE 25

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
