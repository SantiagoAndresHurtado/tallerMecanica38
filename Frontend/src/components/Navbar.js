import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Session from 'react-session-api'

import "../tablas.css";
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
      <nav class="navbar navbar-expand-xl navbar-dark bg-dark"> 
          <div className="container-fluid"> 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <a className="navbar-brand" id="logo" title="Taller Mecanico La 38" href="/">TallerLa38</a>
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav nav-pills">
                  <li class="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Registro" exact>Registro</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Services" exact>Programar Servicios</NavLink>
                  </li>
                  <li class="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/Reports" exact>Reportes</NavLink>
                  </li>
                </ul>
            </div>
          </div>
          <div class="rolinfo" style={{float:'right' , color:'orangered' , display:'block'}}>
            <label style={{color:'orangered'}}> Bienvenido, usuario  {Session.get("rol")} </label> 
            </div>
          </nav>
        
            </div>
        
      
    )
  }
  else if (Session.get("rol") == "Mecánico") {
    return (
        <div className="bg-primary">
          <nav class="navbar navbar-expand-xl navbar-dark bg-dark"> 
          
          <div className="container-fluid"> 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <a className="navbar-brand" id="logo" title="Taller Mecanico La 38" href="/">TallerLa38</a>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav nav-pills">
              <li class="nav-item"></li>
                <NavLink className="nav-link" aria-current="page" to="/Agenda" exact>Mi Agenda</NavLink>
              <li class="nav-item"></li>
          </ul>
          
            </div>
          </div>
          <div class="rolinfo" style={{float:'right' , color:'orangered' , display:'block'}}>
            <label style={{color:'orangered'}}> Bienvenido, usuario  {Session.get("rol")} </label> 
            </div>
          </nav>
          </div>
    )
  }

  
  else if (Session.get("rol") == "Recepcionista"){
    return (
      <div className="bg-primary">
          <nav class="navbar navbar-expand-xl navbar-dark bg-dark"> 
          <div className="container-fluid"> 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <a className="navbar-brand" id="logo" title="Taller Mecanico La 38" href="/">TallerLa38</a>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav nav-pills">
              <li class="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Registro" exact>Registro</NavLink>
              
              </li>
              <li class="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Services" exact>Programar Servicios</NavLink>
              </li>
            </ul>
          
            </div>

          </div>
          <div class="rolinfo" style={{float:'right' , color:'orangered' , display:'block'}}>
            <label style={{color:'orangered'}}> Bienvenido, usuario  {Session.get("rol")} </label> 
            </div>
          </nav>
          </div>
    )
  }

  
  else{
    return (
      <div className="bg-primary">
      <div className="container-fluid"> 
      <a className="" id="logo" title="Taller Mecanico La 38" href="/">TallerLa38</a>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark"> </nav>
      </div>
      </div>
      
    )
  }
};

export default Navbar;