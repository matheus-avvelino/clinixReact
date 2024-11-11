/* eslint-disable no-unused-vars */
import {
  deletePacientesApi,
  detailPacientesApi,
  getPacientesApi,
  registerPacientesApi,
  updatePacientesApi,
} from '../../../services/api';
import { setDetail, setPacientes } from './reducer';

export const getAllPacientes = () => async (dispatch) => {
  try {
    const result = await getPacientesApi();

    dispatch(setPacientes(result));
  } catch (error) {
    console.log('error', error);
  }
};

export const getDetailPaciente = (id) => async (dispatch) => {
  try {
    const result = await detailPacientesApi(id);
    dispatch(setDetail(result));
  } catch (error) {
    console.log('error', error);
  }
};

export const editForm = (field, value) => async (dispatch, getState) => {
  const detalhe = getState().paciente.detalhe;
  console.log(detalhe);
  dispatch(
    setDetail({
      ...detalhe,
      [field]: value,
    })
  );
};

export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const paciente = getState().paciente.detalhe;
      const action = editForm ? updatePacientesApi : registerPacientesApi;
      await action(paciente);
      dispatch(getAllPacientes());
      return Promise.resolve();
    } catch {
      throw new Error('Nao foi possivel cadastrar');
    }
  };

export const deletePaciente = (id) => async (dispatch) => {
  try {
    await deletePacientesApi(id);
    dispatch(getAllPacientes());
  } catch {
    throw new Error('Nao foi possivel deletar');
  }
};
