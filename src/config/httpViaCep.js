import axios from "axios";

const httpViaCep = axios.create({
  baseURL: "https://viacep.com.br/ws", // URL do ViaCEP
});

export default httpViaCep;