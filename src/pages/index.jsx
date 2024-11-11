import "../assets/styleGlobal.css";
import Table from "../components/table";
import { useEffect, useState } from "react";
import { deletePacientesApi, getPacientesApi } from "../services/api";
import Form from "../components/form";

function Initial() {
    const [pacientes, setPacientes] = useState([]);
    const [form, setForm] = useState({});
    const [showForm, setShowForm] = useState(true); //
    const [update, setUpdate] = useState(false);

    const editForm = (value) => {
        setForm(value);
        setUpdate(true);
        setShowForm(true);
        console.log("UPDATE: ${update}");
    };

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
        <>
            {!showForm ? (
                <Form
                    form={form}
                    setForm={setForm}
                    update={update}
                    setUpdate={setUpdate}
                    getPacientes={getPacientes}
                />
            ) : (
                <Table
                    pacientes={pacientes}
                    deleteFn={deletePacientes}
                    editForm={editForm}
                />
            )}
        </>
    );
}

export default Initial;
