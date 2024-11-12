import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import Layout from "./components/layout"
import Initial from "./pages/index"
import Pacientes from "./pages/pacientes"
import CadastroPaciente from "./pages/cadastroPaciente"
import EditPaciente from "./pages/editPaciente"

import Psicologos from "./pages/psicologos"
import EditPsicologo from "./pages/editPsicologo"
import CadastroPsicologo from "./pages/cadastroPsicologo"

function Routers() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path="/" Component={Initial} />

                        <Route path="/pacientes" Component={Pacientes} />
                        <Route path="/pacientes/cadastro" Component={CadastroPaciente} />
                        <Route path="/pacientes/edit/:id?" Component={EditPaciente} />

                        <Route path="/psicologos" Component={Psicologos} />
                        <Route path="/psicologos/edit/:id?" Component={EditPsicologo} />
                        <Route path="/psicologos/cadastro" Component={CadastroPsicologo} />
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    )
}

export default Routers
