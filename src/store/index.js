import { configureStore } from '@reduxjs/toolkit'
import pacienteReducer from './slices/paciente/reducer'
import psicologoReducer from './slices/psicologo/reducer'
import viaCepReducer from "./slices/viaCep/reducer";
export const store = configureStore({
  reducer: {
    paciente: pacienteReducer,
    psicologo: psicologoReducer,
    viaCep: viaCepReducer
  },
})