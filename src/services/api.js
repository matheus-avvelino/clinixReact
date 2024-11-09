import http from "../config/http";

export async function getPacientesApi() {
  const pacientes = await http.get("/pacientes");
  return pacientes.data;
}

export async function deletePacientesApi(id) {
  try {
    await http.delete(`/pacientes/${id}`);
  } catch {
    throw new Error("não foi possível deletar");
  }
}