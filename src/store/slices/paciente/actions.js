/* eslint-disable no-unused-vars */
import PacienteApi from '../../../services/paciente-api';
import { setDetail, setPacientes } from './reducer';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export const getAllPacientes = () => async (dispatch) => {
  try {
    const result = await PacienteApi.fetchAll();

    dispatch(setPacientes(result));
  } catch (error) {
    console.log('error', error);
  }
};

export const getDetailPaciente = (id) => async (dispatch) => {
  try {
    const result = await PacienteApi.fetchDetailsById(id);
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
      const action = editForm ? PacienteApi.update : PacienteApi.create;
      await action(paciente);
      dispatch(getAllPacientes());

      Swal.fire({
        title: 'Sucesso',
        text: `O paciente ${editForm ? 'editado' : 'cadastrado'} com sucesso`,
        icon: 'success',
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: 'OPS',
        text: `Erro ao ${editForm ? 'editar' : 'cadastras'} o paciente!`,
        icon: 'error',
      });
      throw new Error('Nao foi possivel cadastrar');
    }
  };

  export const deletePaciente = (paciente) => async (dispatch) => {
    Swal.fire({
      title: `Deseja excluir o paciente ${paciente.nomeCompleto}?`,
      text: 'Não será possível recuperar após a exclusão',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim, remova!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await PacienteApi.removeById(paciente.id);
          Swal.fire({
            title: 'Removido!',
            text: `Paciente ${paciente.nomeCompleto} removido com sucesso.`,
            icon: 'success',
          });
          dispatch(getAllPacientes());
        } catch (error) {
            console.log("Catch Error: ", error)
          Swal.fire({
            title: 'OPS!',
            text: 'Erro ao remover o paciente. Tente novamente.',
            icon: 'error',
          });
        }
      } else if (result.isDismissed) {
        // Ação a ser executada caso o usuário clique em "Cancelar"
        Swal.fire({
            title: 'OPS!',
            text: 'Erro ao remover o paciente. Tente novamente.',
            icon: 'error',
          });
      }
    });
  };
  
