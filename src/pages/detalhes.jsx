import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Form from "../components/form";
import Error from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPaciente} from "../store/slices/paciente/actions";

function Detalhes() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const { detalhe: paciente } = useSelector((state) => state.paciente)

    useEffect(() => {
        dispatch(getDetailPaciente(id))
    }, [id]);

    if (!paciente) {
        return <Error></Error>
    } else {
        return (
            <>
                {/*JSON.stringify(paciente)*/}
                <Form isEdit/>
            </>
        )
    }


}
export default Detalhes