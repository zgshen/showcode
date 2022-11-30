import axios from "axios";

const urls = {
    login: "/login", 
    logout: "/logout", 
    list: "/list", 
    detail: "/detail", 
    edit: "/edit"
}

const client = axios.create({
    baseURL: "http://localhost/api",
    timeout: 1000 // 设置超时时间,单位毫秒
});

export const Get = (url) => {
    return client.get(urls[url])
}

export const Post = (url, data) => {
    return client.post(urls[url], data)
}