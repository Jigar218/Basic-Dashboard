import axios from "axios";

const Api = axios.create({
  baseURL: "https://randomuser.me/api",
  timeout: 8000,
});

export default Api;
