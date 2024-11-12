import { useEffect } from "react";
import Table from "../components/table";
import { deletePsicologo, getAllPsicologos } from "../store/slices/psicologo/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns"; // Importe as colunas para Psicologos
import { resetDetail } from "../store/slices/psicologo/reducer";


const Psicologos = () => {
    const dispatch = useDispatch();
    const { psicologos } = useSelector((state) => state.psicologo);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllPsicologos());
    }, [dispatch]);

    const deletePsicologoAction = (psicologo) => {
        dispatch(deletePsicologo(psicologo));
    };

    const navigateToPsicologoDetail = (id) => {
        navigate(`/psicologos/edit/${id}`);
    };

    const handleCadastroPsicologo = () => {
        dispatch(resetDetail());
        navigate("/psicologos/cadastro");
    };

    return (
        <div>
            <Table 
                data={psicologos}
                columns={columns.psicologos}
                deleteAction={deletePsicologoAction}
                navigateToDetail={navigateToPsicologoDetail}
                handleCadastro={handleCadastroPsicologo}
            />
        </div>
    );
}

export default Psicologos;
