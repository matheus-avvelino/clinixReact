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
  },
});

// Action creators are generated for each case reducer function
export const { setPacientes, setDetail } = counterSlice.actions;

export default counterSlice.reducer;
