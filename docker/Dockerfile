ARG NODEJS_VERSION=18

##### Stage 1

FROM node:$NODEJS_VERSION-alpine AS builder

RUN apk add --no-cache alpine-sdk=~1 python3=~3 libtool=~2 autoconf=~2 automake=~1 rust=~1 cargo=~1 cmake=~3 clang15-libs=~15 clang15-dev=~15 clang15=~15 rustfmt=~1 linux-headers=~6

WORKDIR /build

COPY ./yarn.lock ./package.json ./.npmrc ./
RUN yarn install --frozen-lockfile


##### Stage 2

FROM node:$NODEJS_VERSION-alpine

WORKDIR /app
VOLUME ["/app/.klayr"]

COPY ./ . 
COPY --from=builder /build/node_modules/ ./node_modules/

RUN npm run build

# ENTRYPOINT ["/app/bin/run"]
# CMD ["start", "--network", "testnet", "--enable-chain-connector-plugin"]

CMD ["/bin/sh", "-c", "/app/bin/run blockchain download --network=testnet --output=/home/klayr/.klayr/tmp/ && /app/bin/run blockchain import /home/klayr/.klayr/tmp/blockchain.db.tar.gz && rm -f /home/klayr/.klayr/tmp/blockchain.db.tar.gz && sleep 5 && /app/bin/run start --network=testnet --enable-chain-connector-plugin"]