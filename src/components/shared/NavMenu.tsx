import { NavLink } from 'react-router-dom';

export default function NavMenu() {
    return (
        <nav className="flex gap-5 text-white">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `hover:text-[#FFD700] ${isActive ? 'text-[#FFD700]' : ''}`
                }
            >
                Inicio
            </NavLink>
            <NavLink
                to="/patients"
                className={({ isActive }) =>
                    `hover:text-[#FFD700] ${isActive ? 'text-[#FFD700]' : ''}`
                }
            >
                Pacientes
            </NavLink>
            <NavLink
                to="/care-plans"
                className={({ isActive }) =>
                    `hover:text-[#FFD700] ${isActive ? 'text-[#FFD700]' : ''}`
                }
            >
                Planes
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `hover:text-[#FFD700] ${isActive ? 'text-[#FFD700]' : ''}`
                }
            >
                Perfil
            </NavLink>
        </nav>
    );
}