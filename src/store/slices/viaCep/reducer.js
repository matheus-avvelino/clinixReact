import { createSlice } from "@reduxjs/toolkit";

// Estado inicial para o slice de ViaCEP
const initialState = {
  endereco: null,  // Dados do endereço
  erro: null,      // Caso ocorra algum erro
  status: "idle",  // Status da requisição (loading, succeeded, failed)
};

// Criando o slice para o ViaCEP
export const viaCepSlice = createSlice({
  name: "viaCep",
  initialState,
  reducers: {
    setEndereco: (state, action) => {
      state.endereco = action.payload;
      state.erro = null;  // Reseta o erro se a requisição for bem-sucedida
    },
    setErro: (state, action) => {
      state.erro = action.payload;
      state.endereco = null;  // Reseta o endereço se houver erro
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setEndereco, setErro, setStatus } = viaCepSlice.actions;

export default viaCepSlice.reducer;
