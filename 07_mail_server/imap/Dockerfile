FROM alpine:3.5

RUN apk add --no-cache dovecot

RUN adduser -u 1000 -D dev && \
    mkdir -p /home/dev/Maildir && \
    chown -R dev:dev /home/dev

COPY ./etc /etc

EXPOSE 143

CMD ["/usr/sbin/dovecot", "-F"]
