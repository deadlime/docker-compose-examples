FROM python:3.6-alpine

RUN pip install Flask SQLAlchemy Flask-SQLAlchemy MySQL-Connector

WORKDIR /app/src

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
