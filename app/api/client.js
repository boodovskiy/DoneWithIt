import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.50.23:9000/api",
});

export default apiClient;
