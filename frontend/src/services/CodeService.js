import axios from "axios";

const host = "http://localhost/api"
const map = {list:"/list", detail:"/detail", edit:"/edit"}

class CodeService {
    
    list() {
        return axios.get(host + map.list);
    }

    detail() {
        return axios.get(host + map.detail);
    }

    edit() {
        return axios.get(host + map.edit);
    }
}

export default new CodeService();