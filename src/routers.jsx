import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Initial from "./pages/index"
import Detalhes from "./pages/detalhes"
import Cadastro from "./pages/cadastro"
function Routers() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" Component={Initial} />
                    <Route path="/cadastro" Component={Cadastro} />
                    <Route path="/teste" Component={Teste} />
                    <Route path="/detalhes/:id?" Component={Detalhes} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routers


function Teste() {
    return (
        <>
            Teste
        </>
    )
}