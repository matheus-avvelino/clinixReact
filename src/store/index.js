import { configureStore } from '@reduxjs/toolkit'
import pacienteReducer from './slices/paciente/reducer'
export const store = configureStore({
  reducer: {
    paciente: pacienteReducer
  },
})