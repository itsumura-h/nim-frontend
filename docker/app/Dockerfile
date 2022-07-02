FROM nginx:1.23.0-alpine

RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories
RUN apk update && \
    apk upgrade --no-cache
RUN apk add --no-cache \
        curl \
        git \
        gcc \
        musl-dev
WORKDIR /root
RUN wget https://nim-lang.org/download/nim-1.6.6-linux_x64.tar.xz && \
    tar -Jxf nim-1.6.6-linux_x64.tar.xz && \
    rm -f nim-1.6.6-linux_x64.tar.xz && \
    mv nim-1.6.6 /root/.nimble

ENV PATH $PATH:/root/.nimble/bin
WORKDIR /application
