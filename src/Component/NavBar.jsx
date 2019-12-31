import React from 'react';

const NavBar=()=>{

        return(
            <nav className="nav-content">
                <ul className="nav-content-menu">
                    <li className="nav-content-menu-item"><a href="#">Articulos</a></li>
                    <li className="nav-content-menu-item"><a href="#">Clientes</a></li>
                    <li className="nav-content-menu-item"><a href="#">Proveedores</a></li>
                    <li className="nav-content-menu-item"><a href="#">Ventas</a></li>
                    <li className="nav-content-menu-item"><a href="#">Seguridad</a></li>
                </ul>
            </nav>
        );
}

export default NavBar;