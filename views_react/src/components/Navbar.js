import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Session from 'react-session-api'
import "../style.css";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Vijit");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  if (Session.get("rol") == "Administrador"){
    return (
      <div className="bg-primary">   
        <header id="header">
          <div className="container">
          <a id="logo" title="Taller Mecanico La 38">TallerLa38</a>
          <ul class="nav nav-pills">
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Registro" exact>Registro</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Services" exact>Programar Servicios</NavLink>
              </li>
            </ul>
          
          <ul class="nav nav-pills">
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Reports" exact>Reportes</NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Agenda" exact>Mi Agenda</NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  else if (Session.get("rol") == "Mecánico") {
    return (
      <div className="bg-primary">   
        <header id="header">
          <div className="container">
            <a id="logo" title="Taller Mecanico La 38">TallerLa38</a>
            <ul class="nav nav-pills">
              <li class="nav-item"></li>
                <NavLink className="nav-link" aria-current="page" to="/Agenda" exact>Mi Agenda</NavLink>
              <li class="nav-item"></li>
            </ul>
            <ul class="nav nav-pills">
                <li class="nav-item"></li>
                <li class="nav-item"></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  else if (Session.get("rol") == "Recepcionista"){
    return (
      <div className="bg-primary">   
        <header id="header">
          <div className="container">
          <a id="logo" title="Taller Mecanico La 38">TallerLa38</a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Registro" exact>Registro</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Services" exact>Programar Servicios</NavLink>
              </li>
            </ul>
            <ul class="nav nav-pills">
              <li class="nav-item"></li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  else{
    return (
      <div className="bg-primary">   
        <header id="header">
          <div className="container">
            <a id="logo" title="Taller Mecanico La 38">TallerLa38</a>
            <ul>
              <li class="nav-item"></li>
              <li class="nav-item"></li>
            </ul>
            <ul>
              <li class="nav-item"></li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
};

export default Navbar;