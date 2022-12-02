FROM golang:1.18.2
COPY . /app/backend

ENV GO111MODULE=on
ENV GOPROXY="https://goproxy.cn"

RUN cd /app/backend && go build main.go

EXPOSE 8080
ENTRYPOINT  ["./main"]