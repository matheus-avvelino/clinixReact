import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pacientes: [],
  detalhe: [],
};

export const counterSlice = createSlice({
  name: 'paciente',
  initialState,
  reducers: {
    setPacientes: (state, action) => {
      state.pacientes = action.payload;
    },
    setDetail: (state, action) => {
      state.detalhe = action.payload;
    },
    resetDetail: (state) => {
      state.detalhe = [];  // Zera o detalhe
    },
  },
});

export const { setPacientes, setDetail, resetDetail } = counterSlice.actions;

export default counterSlice.reducer;
