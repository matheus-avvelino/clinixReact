/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const Form = ({ paciente, change, submit }) => {

    const submitForm = async () => {
        submit()
    }

    return (



        <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => change("nomeCompleto", e.target.value)} value={paciente.nomeCompleto || ""} type="text" name="" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome Completo</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => change("email", e.target.value)} value={paciente.email || ""} type="text" name="" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e) => change("idade", e.target.value)} value={paciente.idade || ""} type="text" name="" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Idade</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e) => change("cpf", e.target.value)} value={paciente.cpf || ""} type="text" name="" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</label>
                </div>
            </div>
            <button onClick={submitForm} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Salvar</button>
        </form>

        /*<div classNameName="cadastro">
            <div classNameName="field">
                <label>Nome Completo</label>
                <input
                    value={paciente.nomeCompleto || ''}
                    onChange={(e) => change("nomeCompleto", e.target.value)}
                    type="text"
                    placeholder="Nome Completo"
                />
            </div>

            <div classNameName="field">
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email@email.com.br"
                    value={paciente.email || ''}
                    onChange={(e) => change("email", e.target.value)}
                />
            </div>

            <div classNameName="field">
                <label>Idade</label>
                <input
                    type="text"
                    placeholder="idade"
                    value={paciente.idade || ''}
                    onChange={(e) => change("idade", e.target.value)}
                />
            </div>

            <div classNameName="field">
                <label>CPF</label>
                <input
                    type="text"
                    placeholder="123.456.789-10"
                    value={paciente.cpf || ''}
                    onChange={(e) => change("cpf", e.target.value)}
                />
            </div>

            <div classNameName="field">
                <button onClick={submitForm}>{update ? "Atualizar" : "Cadastrar" }Salvar</button>
            </div>
        </div>*/


    );
}

export default Form;
