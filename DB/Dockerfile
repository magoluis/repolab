FROM mysql:5.7

ENV MYSQL_DATABASE tweet_app_db
ENV MYSQL_ROOT_PASSWORD 1234

COPY ./tweetApp_script.sql/ /docker-entrypoint-initdb.d/

