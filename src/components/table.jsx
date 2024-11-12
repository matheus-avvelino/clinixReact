/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";

function Table({ data, columns, deleteAction, navigateToDetail, handleCadastro }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[35px]">
            {/* Botão de Cadastro */}
            <div className="mb-4">
                <button
                    onClick={() => handleCadastro()}
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                    Cadastro
                </button>
            </div>

            <table className="w-full text-sm text-left rtl:text-right dark:text-[#000000]">
                <thead className="text-xs text-[#000000] border-b uppercase bg-[#461ed8] dark:bg-[#9885da] dark:text-[#ffffff] dark:border-black">
                    <tr className="text-center">
                        {columns.map((column, i) => (
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
                    {data.map((item, i) => (
                        <tr key={i} className="bg-white border-b text-center dark:bg-[#ffffff] dark:border-black">
                            {Object.keys(item).map((key, j) => (
                                <td key={j} className="px-2 py-4">
                                    {typeof item[key] === "object" && item[key] !== null
                                        ? // Exibe cada campo do objeto endereço
                                          Object.values(item[key]).join(", ")
                                        : item[key]}
                                </td>
                            ))}
                            <td className="px-2 py-4 text-center flex items-center justify-center">
                                <button
                                    onClick={() => navigateToDetail(item.id)}
                                    className="font-medium text-blue-600 dark:text-[#FFA726] hover:underline"
                                >
                                    <FaEdit />
                                </button>
                                <div className="w-px h-6 mx-4 bg-gray-300 dark:bg-gray-500"></div>
                                <button
                                    onClick={() => deleteAction(item)}
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
    );
}

export default Table;
