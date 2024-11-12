import { useEffect } from "react";
import Table from "../components/table";
import { deletePaciente, getAllPacientes } from "../store/slices/paciente/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns"; // Importe as colunas para pacientes
import { resetDetail } from "../store/slices/paciente/reducer";


const Pacientes = () => {
    const dispatch = useDispatch();
    const { pacientes } = useSelector((state) => state.paciente);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllPacientes());
    }, [dispatch]);

    const deletePacienteAction = (paciente) => {
        dispatch(deletePaciente(paciente));
    };

    const navigateToPacienteDetail = (id) => {
        navigate(`/pacientes/edit/${id}`);
    };

    const handleCadastroPaciente = () => {
        dispatch(resetDetail());
        navigate("/pacientes/cadastro");
    };

    return (
        <div>
            <Table
                data={pacientes}
                columns={columns.pacientes}
                deleteAction={deletePacienteAction}
                navigateToDetail={navigateToPacienteDetail}
                handleCadastro={handleCadastroPaciente}
            />
        </div>
    );
}

export default Pacientes;
