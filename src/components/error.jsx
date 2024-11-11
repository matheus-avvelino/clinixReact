import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            <h2>Aluno Não encontrado</h2>
            <h5>Não</h5>
            <br></br>
            <br></br>
            <Link to = "/">Volte para Pagina inicial</Link>
        </div>
    );
}

export default Error;
