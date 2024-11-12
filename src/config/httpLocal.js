import axios from "axios";

const httpLocal = axios.create({
  baseURL: "http://localhost:3333/",
});

export default httpLocal;