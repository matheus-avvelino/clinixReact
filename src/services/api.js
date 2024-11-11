import http from "../config/http";

export async function getPacientesApi() {
  const pacientes = await http.get("/pacientes");
  return pacientes.data;
}

export async function deletePacientesApi(id) {
  try {
    await http.delete(`/pacientes/${id}`);
  } catch {
    throw new Error("Não foi possível deletar");
  }
}

export async function cadastroPacientesApi(form) {
  try {
    await http.post(`/pacientes/`, form);
  } catch {
    throw new Error("Não foi possível cadastras");
  }
}

export async function updatePacientesApi(form) {
  try {
    await http.patch(`/pacientes/${form.id}`, form);
  } catch {
    throw new Error("Não foi possível atualizar o cadastro.");
  }
}

export async function detalhesPacientesApi(id) {
  try {
    return await http.get(`/pacientes/${id}`);
  } catch {
    throw new Error("Não foi possível buscar o paciente por esse ID.");
  }
}