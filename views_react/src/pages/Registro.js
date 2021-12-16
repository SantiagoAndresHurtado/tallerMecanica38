import React, {useState} from 'react'
import Session from 'react-session-api'
 
const Registro = () => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    id: "",
    email: "",
    password: "",
    role: ""
  })

  const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Sus datos se han guardado exitosamente');
    fetch('http://localhost:9000/crearUsuario', {
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

  return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Registrar Usuario</h3></div>
                    <div className="card-body">

                        <div class="form-floating mb-3">
                        <form onSubmit={handleSubmit}>
                            
                            <input type="text" name="name" class="form-control" id="floatingInput" placeholder="Nombres" value={state.name} onChange={handleChange}/>
                            
                            <br/>
                            
                            <input type="text" name="lastname" class="form-control" id="floatingInput" placeholder="Apellidos" value={state.lastname} onChange={handleChange}/>
                            
                            <br/>
                      
                            <input type="text" name="id" class="form-control" id="floatingInput" placeholder="Cédula" value={state.id} onChange={handleChange} />

                            <br/>

                            <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={state.email} onChange={handleChange}/>
                            
                            <br/>

                            <input type="password" name="password" class="form-control" id="floatingInput" placeholder="Contraseña" value={state.password} onChange={handleChange}/>
                          
                            <br/>

                            <select class="form-select" aria-label="Seleccione uno" name="role" value={state.role} onChange={handleChange}>
                                <option selected>Seleccione una opcion</option>
                                <option value="Recepcionista">Recepcionista</option>
                                <option value="Mecánico">Mecánico</option>
                                <option value="Administrador">Administrador</option>
                            </select>

                            <br />

                          <input className="btn btn-primary" type="submit" value="Guardar" />
                          
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
        </div>
                        

  );
}
 
export default Registro;