FROM alpine:3.5

RUN apk add --no-cache bind

COPY named.conf /etc/bind/
COPY db.test /etc/bind/

EXPOSE 53

CMD ["named", "-c", "/etc/bind/named.conf", "-g", "-u", "named"]
