import React, {useCallback, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api'
import "../style.css";

const Home = ({state}) => {
  const navigate = useNavigate();
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    setCredenciales({
      ...credenciales,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9000/ingresar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // We convert the React credenciales to JSON and send it as the POST body
        body: JSON.stringify(credenciales)
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        Session.set("logueado", true);
        Session.set("userid", json.userid)
        Session.set("rol", json.rol)
        if (json.rol == "Administrador") {
          navigate("/Reports")
        }
        else if (json.rol == "Mecánico") {
          navigate("/Agenda")
        }
        else if (json.rol == "Recepcionista") {
          navigate("/Services")
        }
        else {
          Session.set("logueado", false);
          console.log("Usuario o contraseña incorrectos");
        }
      })
      .catch(err => console.error(err));
  }

  return(
    <div className="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header"><h3 className="text-center font-weight-light my-4">Iniciar Sesion</h3></div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" class="form-control" id="inputEmail" placeholder="name@example.com" value={credenciales.email} onChange={handleChange} />
                            <br/>
                            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Contraseña" value={credenciales.password} onChange={handleChange} />
                            <br/>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small" href="password.html">Forgot Password?</a>
                            <input className="btn btn-primary" type="submit" value="Log in" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
  )
};

export default Home;