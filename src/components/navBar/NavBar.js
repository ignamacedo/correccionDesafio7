import React from 'react'; 
import CartWidget from '../cartwidget/CartWidget';
import logo from '../../img/logo.png';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mas de Cosmos</a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto order-0">
            <a className="navbar-brand" href="#">
                    <img src={logo} width="41" height="41"/>
                    Cosmos Store
                </a>
            </div>
            <div></div>
            <div className="navbar-collapse collapse w-100 order-2 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <button onclick="functionOnClick()" className="btn btn-dark">
                        <CartWidget/>
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
