import { useEffect } from "react";
import { useParams } from "react-router-dom"
import FormPaciente from "../components/formPaciente";
import Error from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPaciente} from "../store/slices/paciente/actions";

function EditPaciente() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const { detalhe: paciente } = useSelector((state) => state.paciente)

    useEffect(() => {
        dispatch(getDetailPaciente(id))
    }, [dispatch, id]);

    if (!paciente) {
        return <Error></Error>
    } else {
        return (
            <>
                {/*JSON.stringify(paciente)*/}
                <FormPaciente isEdit/>
            </>
        )
    }


}
export default EditPaciente