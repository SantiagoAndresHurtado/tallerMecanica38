import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <div className="bg-primary">
      <header id="header">
        <div className="container">
          <a id="logo" title="Taller Mecanico La 38">TallerLa38</a>
          <div className="menu-trigger"></div>
          <nav id="menu">
            <ul>
              <NavLink className="navbar-item" activeClassName="is-active" to="/Users" exact>
                Equipo
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/Services" exact>
                Servicios
              </NavLink>
            </ul>
            <ul>
              <NavLink className="navbar-item" activeClassName="is-active" to="/Reports" exact>
                Reportes
              </NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/Schedule" exact>
                Agenda
              </NavLink>
            </ul>
          </nav>
          {/* <!-- / navigation--> */}
        </div>
        {/* <!-- / container--> */}

      </header>
    </div>
  )
  // return (
  //   <nav
  //     className="navbar is-primary"
  //     role="navigation"
  //     aria-label="main navigation"
  //   >
  //     <div className="container">
  //       <div className="navbar-brand">
  //         <a
  //           role="button"
  //           className={`navbar-burger burger ${isOpen && "is-active"}`}
  //           aria-label="menu"
  //           aria-expanded="false"
  //           onClick={() => setOpen(!isOpen)}
  //         >
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //           <span aria-hidden="true"></span>
  //         </a>
  //       </div>

  //       <div className={`navbar-menu ${isOpen && "is-active"}`}>
  //         <div className="navbar-start">
  //           <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
  //             Home
  //           </NavLink>

  //           <NavLink className="navbar-item" activeClassName="is-active" to="/about">
  //             About
  //           </NavLink>

  //           <NavLink className="navbar-item" activeClassName="is-active" to="/profile/Vijit" >
  //             Profile
  //           </NavLink>
  //         </div>

  //         <div className="navbar-end">
  //           <div className="navbar-item">
  //             <div className="buttons">
  //               {!isAuth ? (
  //                 <button className="button is-white" onClick={loginUser}>
  //                   Log in
  //                 </button>
  //               ) : (
  //                 <button className="button is-black" onClick={logoutUser}>
  //                   Log out
  //                 </button>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;