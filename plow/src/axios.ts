import axios from "axios";

const api = axios.create({
    baseURL: "//localhost:5928/api"
})

export default api