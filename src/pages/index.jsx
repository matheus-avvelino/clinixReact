import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPacientes } from "../store/slices/paciente/actions";

function Initial() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllPacientes());
    }, [dispatch]);

    return (
        <>
            <Table />
        </>
    );
}

export default Initial;
