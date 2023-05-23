import axios from "axios";
const service = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/2771142-0-default",
  timeout: 1000
});
service.interceptors.request.use((config) => config);
service.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);
export default service;
