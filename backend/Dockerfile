FROM golang:1.18.2
WORKDIR . /app/backend
COPY . .

ENV GO111MODULE=on
ENV GOPROXY="https://goproxy.cn"

RUN go mod download
RUN go build main.go

EXPOSE 8080
ENTRYPOINT  ["./main"]
