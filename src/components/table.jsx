/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-pacientes"
import { FiEdit, FiDelete } from "react-icons/fi";

function Table({ pacientes, deleteFn }) {
    const navigate = useNavigate();

    return (
        <table>
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
                            <button onClick={() => navigate(`/detalhes/${item.id}`)} className="btn btn-editar">
                                <FiEdit />
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => deleteFn(item.id)}
                                className="btn btn-excluir"
                            >
                                <FiDelete />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;