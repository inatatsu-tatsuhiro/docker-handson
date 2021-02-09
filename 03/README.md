# sample
複数のコンテナを使って通信を行う

# container
- server : node:14 (express)
- front : node:14 (react)
- nginx : nginx (reverse proxy)
# command

```
$ docker-compose run --rm server npm install
$ docker-compose run --rm front npm i
$ docker-compose up -d
```