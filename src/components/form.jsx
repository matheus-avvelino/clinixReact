/* eslint-disable react/prop-types */
import { cadastroPacientesApi, editarPacientesApi } from "../services/api";

const Form = ({form, setForm, update, setUpdate, getPacientes}) => {

    const setChange = (field, value) => {
        setForm(
            {
                ...form,

                [field]: value,
            }
        )
    }

    const submit = async () => {
        try {
            const action = update ? editarPacientesApi : cadastroPacientesApi;
            await action(form);
            alert(`${update ? `Atualização` : `Cadastrado`} do usuario ${form.nomeCompleto} feito com sucesso`);
            setForm({})
            getPacientes();
            setUpdate(false);
        } catch {
            throw new Error("Error Cadastro");
        } 
    }

    return (
        <div className="cadastro">
            {console.log(update)}
            {update ? "update" : "cadastro"}
            <div className="field">
                <label>Nome Completo</label>
                <input 
                    type="text" 
                    placeholder="Nome Completo"
                    value={form.nomeCompleto || ''}
                    onChange={(e) => setChange('nomeCompleto', e.target.value)}
                />
            </div>

            <div className="field">
                <label>Email</label>
                <input 
                    type="text"
                    placeholder="email@email.com.br"
                    value={form.email || ''}
                    onChange={(e) => setChange('email', e.target.value)}/>
            </div>

            <div className="field">
                <label>Idade</label>
                <input 
                    type="text" 
                    placeholder="idade"
                    value={form.idade || ''} 
                    onChange={(e) => setChange('idade', e.target.value)}/>
            </div>

            <div className="field">
                <label>CPF</label>
                <input 
                    type="text"
                    placeholder="123.456.789-10"
                    value={form.cpf || ''}
                    onChange={(e) => setChange('cpf', e.target.value)}    
                />
            </div>

            <div className="field">
                <button onClick={submit}>{update ? "Atualizar" : "Cadastrar"}</button>
            </div>
        </div>
        
    );
}

export default Form;
