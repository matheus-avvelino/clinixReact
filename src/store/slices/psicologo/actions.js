/* eslint-disable no-unused-vars */
import PsicologoApi from '../../../services/psicologo-api'; // Supondo que você tenha uma API similar à de paciente
import { setDetail, setPsicologos } from './reducer';
import Swal from 'sweetalert2/dist/sweetalert2.js';

// Action para buscar todos os psicólogos
export const getAllPsicologos = () => async (dispatch) => {
  try {
    const result = await PsicologoApi.fetchAll();
    dispatch(setPsicologos(result)); // Atualiza o estado com a lista de psicólogos
  } catch (error) {
    console.log('error', error);
  }
};

// Action para buscar detalhes de um psicólogo pelo ID
export const getDetailPsicologo = (id) => async (dispatch) => {
  try {
    const result = await PsicologoApi.fetchDetailsById(id);
    dispatch(setDetail(result)); // Atualiza o estado com os detalhes do psicólogo
  } catch (error) {
    console.log('error', error);
  }
};

// Action para editar um campo do formulário de psicólogo
export const editForm = (field, value) => async (dispatch, getState) => {
  const detalhe = getState().psicologo.detalhe;
  dispatch(
    setDetail({
      ...detalhe,
      [field]: value,
    })
  );
};

// Action para salvar o formulário de psicólogo (criar ou editar)
export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const psicologo = getState().psicologo.detalhe;
      const action = editForm ? PsicologoApi.update : PsicologoApi.create;
      await action(psicologo);
      dispatch(getAllPsicologos());

      Swal.fire({
        title: 'Sucesso',
        text: `O psicólogo ${editForm ? 'editado' : 'cadastrado'} com sucesso`,
        icon: 'success',
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: 'OPS',
        text: `Erro ao ${editForm ? 'editar' : 'cadastrar'} o psicólogo!`,
        icon: 'error',
      });
      throw new Error('Não foi possível cadastrar o psicólogo');
    }
  };

// Action para deletar um psicólogo
export const deletePsicologo = (psicologo) => async (dispatch) => {
  Swal.fire({
    title: `Deseja excluir o psicólogo ${psicologo.nomeCompleto}?`,
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
        await PsicologoApi.removeById(psicologo.id);
        Swal.fire({
          title: 'Removido!',
          text: `Psicólogo ${psicologo.nomeCompleto} removido com sucesso.`,
          icon: 'success',
        });
        dispatch(getAllPsicologos());
      } catch (error) {
        console.log("Catch Error: ", error)
        //Não consegui fazer esse Catch funcionar...
        Swal.fire({
          title: 'OPS!',
          text: 'Erro ao remover o psicólogo. Tente novamente.',
          icon: 'error',
        });
      }
    } else if (result.isDismissed) {
      // Ação a ser executada caso o usuário clique em "Cancelar"
      Swal.fire({
        title: 'OPS!',
        text: 'Erro ao remover o psicólogo. Tente novamente.',
        icon: 'error',
      });
    }
  });
};
