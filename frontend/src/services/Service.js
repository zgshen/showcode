import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost/api",
    timeout: 10000 // 设置超时时间,单位毫秒
});

export const GetList = () => {
    return client.get("/code/list")
}

export const GetOne = (id) => {
    // 模板字符串
    let url = `/codes/${id}`
    return client.get(url)
}

export const PostData = (data) => {
    return client.post("/code/add", data)
}

export const PostLogin = (data) => {
    return client.post("/user/login", data)
}