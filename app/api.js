import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.20:5000/api/auth", // Adjust if your backend runs elsewhere
    timeout: 10000,
});

export default API;
