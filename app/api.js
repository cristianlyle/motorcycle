import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.100.22:5000/api/auth",
    timeout: 10000,
});

export default API;
