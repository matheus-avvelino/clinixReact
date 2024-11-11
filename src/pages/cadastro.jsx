import { useState } from "react";
import Form from "../components/form";
import { cadastroPacientesApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const setChange = (field, value) =>
        setForm({
            ...form,
            [field]:value,
        })

    const cadastroPaciente = async () => {
        try {
            await cadastroPacientesApi(form)
            alert(`Cadastro do usuario ${form.nomeCompleto} feito com sucesso`)
            setForm({})
            navigate("/")
            
        } catch {
            throw new Error("Nao foi possivel cadastrar")
            
        }
    }
    return (

        <>
            {/*JSON.stringify(form)*/}
            <Form paciente={form} change={setChange} submit={cadastroPaciente}/>
        </>
    );
}

export default Cadastro;
