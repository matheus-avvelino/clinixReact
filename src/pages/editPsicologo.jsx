import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormPsicologo from "../components/formPsicologo";
import Error from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPsicologo } from "../store/slices/psicologo/actions";

function EditPsicologo() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const { detalhe: psicologo } = useSelector((state) => state.psicologo);

    useEffect(() => {
        dispatch(getDetailPsicologo(id));
    }, [dispatch, id]);

    if (!psicologo) {
        return <Error />;
    } else {
        return (
            <>
                {/*JSON.stringify(psicologo)*/}
                <FormPsicologo isEdit/>
            </>
        );
    }
}

export default EditPsicologo;
