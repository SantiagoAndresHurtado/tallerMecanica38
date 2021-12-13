import React, {useState} from 'react'
import "../style.css";

const Home = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    setState({
      ...state,
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
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(state)
    })
    .then((res) => {
      return res.json();
    })
    .catch(error =>{
      console.error(error);
    })
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
                            <input type="email" name="email" class="form-control" id="inputEmail" placeholder="name@example.com" value={state.email} onChange={handleChange} />
                            <br/>
                            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Contraseña" value={state.password} onChange={handleChange} />
                            <br/>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small" href="password.html">Forgot Password?</a>
                            <input className="btn btn-primary" type="submit" value="Guardar" />
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