FROM ubuntu:20.04

RUN apt update --fix-missing && \
    apt upgrade -y
RUN apt install -y --no-install-recommends \
        gcc \
        libc6-dev \
        xz-utils \
        ca-certificates \
        vim \
        wget \
        git \
        libpq-dev
WORKDIR /root
RUN wget https://nim-lang.org/download/nim-1.6.6-linux_x64.tar.xz && \
    tar -Jxf nim-1.6.6-linux_x64.tar.xz && \
    rm -f nim-1.6.6-linux_x64.tar.xz && \
    mkdir /root/.nimble && \
    mv nim-1.6.6/* .nimble/

ENV PATH $PATH:/root/.nimble/bin
WORKDIR /application
