/* eslint-disable react/prop-types */

import { columns } from "../config/columns-pacientes"

function Table({ pacientes, deleteFn }) {


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
              <a href="#" className="btn-editar">
                Editar
              </a>
            </td>
            <td>
              <button
                onClick={() => deleteFn(item.id)}
                className="btn btn-excluir"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;