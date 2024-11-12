import { useEffect } from "react";
import FormPaciente from "../components/formPaciente";
import { useDispatch } from "react-redux";
import { setDetail } from "../store/slices/paciente/reducer";


const CadastroPaciente = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDetail())
    }, [dispatch])

    return (

        <>
            {/*JSON.stringify(form)*/}
            <FormPaciente />
        </>
    );
}

export default CadastroPaciente;
