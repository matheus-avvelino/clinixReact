import httpLocal from "../config/httpLocal";

const patchIdentify = '/psicologos';

/**
 * Busca todos os psicólogos da API.
 * @returns {Promise<Object[]>} Uma lista de todos os psicólogos.
 * @throws {Error} Se ocorrer um erro ao buscar os psicólogos.
 */
export async function fetchAll() {
  try {
    const response = await httpLocal.get(`${patchIdentify}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar todos os psicólogos:", error.message);
    throw new Error("Não foi possível carregar a lista de psicólogos.");
  }
}

/**
 * Remove um psicólogo pelo ID.
 * @param {string} id - O ID do psicólogo a ser removido.
 * @throws {Error} Se ocorrer um erro ao deletar o psicólogo.
 */
export async function removeById(id) {
  try {
    await httpLocal.delete(`${patchIdentify}/${id}`);
  } catch (error) {
    console.error("Erro ao deletar psicólogo:", error.message);
    throw new Error("Não foi possível deletar o psicólogo. Tente novamente.");
  }
}

/**
 * Cria um novo psicólogo.
 * @param {Object} form - Dados do psicólogo a ser cadastrado.
 * @param {string} form.id - ID único do psicólogo.
 * @param {string} form.nomeCompleto - Nome completo do psicólogo.
 * @param {string} form.email - E-mail do psicólogo.
 * @param {string} form.idade - Idade do psicólogo.
 * @param {string} form.crp - Número do CRP do psicólogo.
 * @param {string} form.abordagem - Abordagem terapêutica do psicólogo.
 * @returns {Promise<void>}
 * @throws {Error} Se ocorrer um erro ao cadastrar o psicólogo.
 */
export async function create(form) {
  try {
    await httpLocal.post(`${patchIdentify}/`, form);
  } catch (error) {
    console.error("Erro ao cadastrar psicólogo:", error.message);
    throw new Error("Não foi possível cadastrar o psicólogo. Verifique os dados e tente novamente.");
  }
}

/**
 * Atualiza as informações de um psicólogo existente.
 * @param {Object} form - Dados do psicólogo a serem atualizados.
 * @param {string} form.id - ID único do psicólogo.
 * @param {string} form.nomeCompleto - Nome completo do psicólogo.
 * @param {string} form.email - E-mail do psicólogo.
 * @param {string} form.idade - Idade do psicólogo.
 * @param {string} form.crp - Número do CRP do psicólogo.
 * @param {string} form.abordagem - Abordagem terapêutica do psicólogo.
 * @returns {Promise<void>}
 * @throws {Error} Se ocorrer um erro ao atualizar o cadastro do psicólogo.
 */
export async function update(form) {
  try {
    await httpLocal.patch(`${patchIdentify}/${form.id}`, form);
  } catch (error) {
    console.error("Erro ao atualizar cadastro de psicólogo:", error.message);
    throw new Error("Não foi possível atualizar o cadastro do psicólogo.");
  }
}

/**
 * Busca os detalhes de um psicólogo específico pelo ID.
 * @param {string} id - O ID do psicólogo.
 * @returns {Promise<Object>} Os detalhes do psicólogo.
 * @throws {Error} Se ocorrer um erro ao buscar os detalhes do psicólogo.
 */
export async function fetchDetailsById(id) {
  try {
    const response = await httpLocal.get(`${patchIdentify}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do psicólogo:", error.message);
    throw new Error("Não foi possível buscar o psicólogo por esse ID. Verifique o ID e tente novamente.");
  }
}

export default {
  fetchAll,
  removeById,
  create,
  update,
  fetchDetailsById
};
