import { useEffect } from "react";
import Form from "../components/form";
import { useDispatch } from "react-redux";
import { setDetail } from "../store/slices/paciente/reducer";


const Cadastro = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDetail())
    }, [dispatch])

    return (

        <>
            {/*JSON.stringify(form)*/}
            <Form/>
        </>
    );
}

export default Cadastro;
