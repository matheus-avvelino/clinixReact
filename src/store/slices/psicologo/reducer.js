import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  psicologos: [],
  detalhe: [],
};

export const psicologoSlice = createSlice({
  name: 'psicologo',
  initialState,
  reducers: {
    setPsicologos: (state, action) => {
      state.psicologos = action.payload;
    },
    setDetail: (state, action) => {
      state.detalhe = action.payload;
    },
    resetDetail: (state) => {
      state.detalhe = [];  // Zera o detalhe
    },
  },
});

export const { setPsicologos, setDetail , resetDetail} = psicologoSlice.actions;

export default psicologoSlice.reducer;
