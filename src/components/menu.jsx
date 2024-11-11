import { NavLink } from "react-router-dom";

function Menu() {

    const menus = [
        { name: 'Inicio', route: '/' },
        { name: 'Pacientes', route: '/pacientes' },
        { name: 'Psicologos', route: '/psicologos' },
        { name: 'Atendimentos', route: '/atendimentos' },
        { name: 'Cadastro', route: '/cadastro' }
    ]

    return (
        <nav className="menu">
            {menus.map((item, i) => (
                <NavLink
                    key={i}
                    to={item.route}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
}

export default Menu;