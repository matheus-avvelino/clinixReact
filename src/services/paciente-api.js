import httpLocal from "../config/httpLocal";

const patchIdentify ='/pacientes'

/**
 * Busca todos os pacientes da API.
 * @returns {Promise<Object[]>} Uma lista de todos os pacientes.
 * @throws {Error} Se ocorrer um erro ao buscar os pacientes.
 */
export async function fetchAll() {
  try {
    const response = await httpLocal.get(`${patchIdentify}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar todos os pacientes:", error.message);
    throw new Error("Não foi possível carregar a lista de pacientes.");
  }
}

/**
 * Remove um paciente pelo ID.
 * @param {string} id - O ID do paciente a ser removido.
 * @throws {Error} Se ocorrer um erro ao deletar o paciente.
 */
export async function removeById(id) {
  try {
    await httpLocal.delete(`${patchIdentify}/${id}`);
  } catch (error) {
    console.error("Erro ao deletar paciente:", error.message);
    throw new Error("Não foi possível deletar o paciente. Tente novamente.");
  }
}

/**
 * Cria um novo paciente.
 * @param {Object} form - Dados do paciente a ser cadastrado.
 * @param {string} form.id - ID único do paciente.
 * @param {string} form.nomeCompleto - Nome completo do paciente.
 * @param {string} form.email - E-mail do paciente.
 * @param {string} form.idade - Idade do paciente.
 * @param {string} form.cpf - CPF do paciente.
 * @returns {Promise<void>}
 * @throws {Error} Se ocorrer um erro ao cadastrar o paciente.
 */
export async function create(form) {
  try {
    await httpLocal.post(`${patchIdentify}/`, form);
  } catch (error) {
    console.error("Erro ao cadastrar paciente:", error.message);
    throw new Error("Não foi possível cadastrar o paciente. Verifique os dados e tente novamente.");
  }
}

/**
 * Atualiza as informações de um paciente existente.
 * @param {Object} form - Dados do paciente a serem atualizados.
 * @param {string} form.id - ID único do paciente.
 * @param {string} form.nomeCompleto - Nome completo do paciente.
 * @param {string} form.email - E-mail do paciente.
 * @param {string} form.idade - Idade do paciente.
 * @param {string} form.cpf - CPF do paciente.
 * @returns {Promise<void>}
 * @throws {Error} Se ocorrer um erro ao atualizar o cadastro do paciente.
 */
export async function update(form) {
  try {
    await httpLocal.patch(`${patchIdentify}/${form.id}`, form);
  } catch (error) {
    console.error("Erro ao atualizar cadastro de paciente:", error.message);
    throw new Error("Não foi possível atualizar o cadastro do paciente.");
  }
}

/**
 * Busca os detalhes de um paciente específico pelo ID.
 * @param {string} id - O ID do paciente.
 * @returns {Promise<Object>} Os detalhes do paciente.
 * @throws {Error} Se ocorrer um erro ao buscar os detalhes do paciente.
 */
export async function fetchDetailsById(id) {
  try {
    const response = await httpLocal.get(`${patchIdentify}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do paciente:", error.message);
    throw new Error("Não foi possível buscar o paciente por esse ID. Verifique o ID e tente novamente.");
  }
}


export default {
  fetchAll,
  removeById,
  create,
  update,
  fetchDetailsById
}