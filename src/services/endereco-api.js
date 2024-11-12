import httpViaCep from "../config/httpViaCep";

const fetchEndereco = async (cep) => {
    try {
      const response = await httpViaCep.get(`/${cep}/json`); // Faz a requisição GET para o ViaCEP
      console.log("Endereço encontrado:", response.data); // Imprime os dados no console
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error); // Caso ocorra um erro, imprime no console
    }
  };

export default fetchEndereco;