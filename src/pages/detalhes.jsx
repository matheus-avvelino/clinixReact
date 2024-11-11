import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { detalhesPacientesApi, updatePacientesApi } from "../services/api";
import Form from "../components/form";
import Error from "../components/error";

function Detalhes() {
    let { id } = useParams();
    const [paciente, setPaciente] = useState(null);
    const navigate = useNavigate();


    const setChange = (field, value) =>
        setPaciente({
            ...paciente,
            [field]: value,
        })

    const updatePaciente = async () => {
        try {
            await updatePacientesApi(paciente)
            alert(`Edição do usuario ${paciente.nomeCompleto} feito com sucesso`)
            setPaciente({})
            navigate("/")

        } catch {
            throw new Error("Nao foi possivel cadastrar")

        }
    }

    useEffect(() => {
        (async () => {
            const paciente = await detalhesPacientesApi(id);
            setPaciente(paciente.data);
        })()
    }, [id]);

    if(!paciente){
        return <Error></Error>
    } else{
        return (
        <>
            {/*JSON.stringify(paciente)*/}
            <Form paciente={paciente || {}} change={setChange} submit={updatePaciente} />
        </>
    )
    }

    
}
export default Detalhes