/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-pacientes"

import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePaciente } from "../store/slices/paciente/actions";

function Table() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pacientes } = useSelector((state) => state.paciente)
    const removePaciente = (paciente) => dispatch(deletePaciente(paciente))

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[35px]">
            <table className="w-full text-sm text-left rtl:text-right dark:text-[#000000] ">
                <thead className="text-xs text-[#000000] border-b uppercase bg-[#461ed8] dark:bg-[#9885da] dark:text-[#ffffff] dark:border-black">
                    <tr className="text-center">
                        {columns.pacientes.map((column, i) => (
                            <th key={i} scope="col" className="px-2 py-4">
                                {column}
                            </th>
                        ))}
                        <th scope="col" className="px-2 py-4">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map((item, i) => (
                        <tr
                            key={i}
                            className="bg-white border-b text-center dark:bg-[#ffffff]  dark:border-black "
                        >
                            <td className="px-2 py-4">{item.id}</td>
                            <td className="px-2 py-4">{item.nomeCompleto}</td>
                            <td className="px-2 py-4">{item.email}</td>
                            <td className="px-2 py-4">{item.idade}</td>
                            <td className="px-2 py-4">{item.cpf}</td>
                            <td className="px-2 py-4 text-center flex items-center justify-center">
                                <button
                                    onClick={() => navigate(`/detalhes/${item.id}`)}
                                    className="font-medium text-blue-600 dark:text-[#FFA726] hover:underline"
                                >
                                    <FaEdit />
                                </button>
                                <div className="w-px h-6 mx-4 bg-gray-300 dark:bg-gray-500"></div>
                                <button
                                    onClick={() => removePaciente(item)}
                                    className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                                >
                                    <FaTrash />
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


        /*<table>
            <thead>
                <tr>
                    {columns.pacientes.map((column, i) => (
                        <th key={i}>{column.toUpperCase()}</th>
                    ))}
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                {pacientes.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.nomeCompleto}</td>
                        <td>{item.email}</td>
                        <td>{item.idade}</td>
                        <td>{item.cpf}</td>
                        <td>
                            <button onClick={() => navigate(`/detalhes/${item.id}`)} classNameName="btn btn-editar">
                                <FiEdit />
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => deleteFn(item.id)}
                                classNameName="btn btn-excluir"
                            >
                                <FiDelete />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>*/
    );
}

export default Table;