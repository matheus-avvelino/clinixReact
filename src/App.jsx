import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect, useState } from "react";
import { deletePacientesApi, getPacientesApi } from "./services/api";

function App() {
  const [pacientes, setPacientes] = useState([])


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
       <Table pacientes={pacientes} deleteFn={deletePacientes} />
    </Layout>
  )
}

export default App
