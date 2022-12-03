
### Golang & ReactJS example

学 Golang 和 ReactJS 的练习项目

### Usage

初始化 SQLite 数据库。
```bash
cd backend
sudo ./db.sh
```

backend 工程启动入口 `backend/main.go`
请求链 handle -> service -> model

frontend 本地 Node 环境启动端口配置在 .env 文件中，`src/service/Service.js` axios 请求端口须与 .env 中的一致，代理转发后端，代理使用 http-proxy-middleware。

Docker 部署使用 Nginx，Service.js 同样与 Nginx 端口一致，后端端口转发到 server 后端容器。

使用 Docker Compose 一起部署前后端项目，在 showcode 根目录：
```bash
# 编译
docker-compose build
# 启动
docker-compose up
# 或者后台启动
docker-compose up -d
```

### Related

- [Echo](https://echo.labstack.com/guide/) High performance, extensible, minimalist Go web framework
- [Gorm](https://gorm.io/) The fantastic ORM library for Golang
- [Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework packed
- [HyperUI](https://www.hyperui.dev/) Free Open Source Tailwind CSS Components
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) React component to render markdown