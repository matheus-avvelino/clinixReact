/* eslint-disable react/prop-types */

const Form = ({ paciente, change, submit }) => {

    const submitForm = async () => {
        submit()
    }

    return (
        <div className="cadastro">
            <div className="field">
                <label>Nome Completo</label>
                <input
                    value={paciente.nomeCompleto || ''}
                    onChange={(e) => change("nomeCompleto", e.target.value)}
                    type="text"
                    placeholder="Nome Completo"
                />
            </div>

            <div className="field">
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email@email.com.br"
                    value={paciente.email || ''}
                    onChange={(e) => change("email", e.target.value)}
                />
            </div>

            <div className="field">
                <label>Idade</label>
                <input
                    type="text"
                    placeholder="idade"
                    value={paciente.idade || ''}
                    onChange={(e) => change("idade", e.target.value)}
                />
            </div>

            <div className="field">
                <label>CPF</label>
                <input
                    type="text"
                    placeholder="123.456.789-10"
                    value={paciente.cpf || ''}
                    onChange={(e) => change("cpf", e.target.value)}
                />
            </div>

            <div className="field">
                <button onClick={submitForm}>{/*update ? "Atualizar" : "Cadastrar" */}Salvar</button>
            </div>
        </div>

    );
}

export default Form;
