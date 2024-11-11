import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Initial from "./pages/index"
import Detalhes from "./pages/detalhes"
import Cadastro from "./pages/cadastro"
import { Provider } from "react-redux"
import { store } from "./store"
function Routers() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path="/" Component={Initial} />
                        <Route path="/cadastro" Component={Cadastro} />
                        <Route path="/detalhes/:id?" Component={Detalhes} />
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    )
}

export default Routers
