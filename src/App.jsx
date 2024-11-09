import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect, useState } from "react";
import { deletePacientesApi, getPacientesApi } from "./services/api";
import Form from "./components/form";

function App() {
  const [pacientes, setPacientes] = useState([])
  const [form, setForm] = useState({});
  const [showForm, setShowForm] = useState(true); //
  const [update, setUpdate] = useState(false);

  const toggleView = () => {
    setShowForm(!showForm); // Alterna entre Form e Table
    setUpdate(false);
    setForm({});
    getPacientes
  };

  const editForm = (value) => {
    setForm(value);
    setUpdate(true);
    setShowForm(true);
    console.log('UPDATE: ${update}')
  }


  const deletePacientes = async (id) => {
    try {
      await deletePacientesApi(id);
      await getPacientes();
    } catch {
      alert("aconteceu um erro");
    }
  };

  const getPacientes = async () => {
    const data = await getPacientesApi();
    setPacientes(data);
  };

  useEffect(() => {
    getPacientes();
  }, []);


  return (
    <Layout>
      <button className="btn-alterar" onClick={toggleView}>
      {showForm ? "Exibir Tabela" : "Exibir Formulário"}
      </button>
      {showForm ? (
        <Form form={form} setForm={setForm} update={update} setUpdate={setUpdate} getPacientes={getPacientes} />
      ) : (
        <Table pacientes={pacientes} deleteFn={deletePacientes} editForm={editForm} />
      )}
    </Layout>
  )
}

export default App
