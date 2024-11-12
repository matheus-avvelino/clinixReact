import { setEndereco, setErro, setStatus } from "../viaCep/reducer";
import axios from "axios";

// Ação para buscar o endereço do ViaCEP
export const buscarEndereco = (cep) => async (dispatch) => {
  dispatch(setStatus("loading")); // Define o status como "loading" enquanto a requisição ocorre

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (response.data.erro) {
      dispatch(setErro("CEP não encontrado"));
      dispatch(setStatus("failed"));
    } else {
      dispatch(setEndereco(response.data));
      dispatch(setStatus("succeeded"));
    }
  } catch (error) {
    dispatch(setErro("Erro ao buscar o CEP",error));
    dispatch(setStatus("failed"));
  }
};
