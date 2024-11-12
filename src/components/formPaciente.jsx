/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/paciente/actions";
import { useNavigate } from "react-router-dom";
import FormEndereco from "./formEndereco";

const FormPaciente = ({ isEdit }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { detalhe: paciente } = useSelector((state) => state.paciente);

    const changedField = (field, value) => dispatch(editForm(field, value));

    const handleEnderecoChange = (endereco) => {
        dispatch(editForm("endereco", endereco)); // Atualiza o endereço no estado global
    };

    const submitForm = () => {
        dispatch(saveForm(isEdit)).then(() => {
            navigate("/pacientes");
        });
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input
                    onChange={(e) => changedField("nomeCompleto", e.target.value)}
                    value={paciente?.nomeCompleto || ""}
                    type="text"
                    name=""
                    id=""
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nome Completo
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    onChange={(e) => changedField("email", e.target.value)}
                    value={paciente?.email || ""}
                    type="text"
                    name=""
                    id=""
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        onChange={(e) => changedField("idade", e.target.value)}
                        value={paciente?.idade || " "}
                        type="text"
                        name=""
                        id=""
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Idade
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        onChange={(e) => changedField("cpf", e.target.value)}
                        value={paciente?.cpf || ""}
                        type="text"
                        name=""
                        id=""
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        CPF
                    </label>
                </div>
            </div>

            <FormEndereco onEnderecoChange={handleEnderecoChange} pacienteEndereco={paciente?.endereco} />

            <button
                onClick={submitForm}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Salvar
            </button>
        </div>
    );
};

export default FormPaciente;
