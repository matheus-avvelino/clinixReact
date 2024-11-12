import { NavLink } from "react-router-dom";
import "../assets/menu.css"

function Header() {
    return (
        <nav className="menu bg-[#b5bcc2] border-[#aab7c3] dark:bg-[#9885da] dark:border-[#9885da]">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Gestão Cinica Psicologica
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-[#b5bcc2] border-[#aab7c3] dark:bg-[#9885da] dark:border-[#2c3e50]">
                        <li>
                            <NavLink
                                to="/"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#000000] md:p-0 dark:text-white md:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                            >
                                Inicio
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/pacientes"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#000000] md:p-0 dark:text-white md:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                            >
                                Pacientes
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/psicologos"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#000000] md:p-0 dark:text-white md:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                            >
                                Psicologos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;