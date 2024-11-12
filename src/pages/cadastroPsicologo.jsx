import { useEffect } from "react";
import FormPsicologo from "../components/formPsicologo";
import { useDispatch } from "react-redux";
import { setDetail } from "../store/slices/psicologo/reducer";

const CadastroPsicologo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDetail());
    }, [dispatch]);

    return (
        <>
            {/*JSON.stringify(form)*/}
            <FormPsicologo  />
        </>
    );
}

export default CadastroPsicologo;
