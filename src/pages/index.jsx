import Table from "../components/table";
import { useEffect, useState } from "react";
import { deletePacientesApi, getPacientesApi } from "../services/api";

function Initial() {
    const [pacientes, setPacientes] = useState([]);

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
                <Table
                    pacientes={pacientes}
                    deleteFn={deletePacientes}
                />
        </>
    );
}

export default Initial;
