import React, {useState} from 'react';
import Session from 'react-session-api'
 
const Agenda = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  let obj;
  
  fetch(`http://localhost:9000/api/citas/${Session.get("userid")}/${date}`)
  .then(response => response.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
  
  console.log("++++++++++++++++++++")
  console.log(obj)
  const [state, setState] = useState({
    vestatus: "",   
    comment: ""
  })
  const prueba = {"fecha":"2021-12-11","hora":"9"}
  const prueba2 = {"fecha":"2021-02-12","hora":"9"}

  const mostrar = (event) => {
    
  }

  const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = (event) => {
    alert('Sus datos se han guardado exitosamente');
    event.preventDefault();
  
    fetch('http://localhost:9000/actualizacioncitas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(state)
    }).then(function(response) {
      return response.json();
    });
  }

  return (
    <div className="container">
      <div className="row g-3">
        <div className="card-header"><h3 className="text-center font-weight-light my-4">Gestion de Servicios</h3></div>
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-body">
              <div class="form-floating mb-3">
              <form onSubmit={handleSubmit}>
                {/* <select class="form-select" aria-label="Servicios" name="service" disabled value={state.service} onChange={handleChange}>
                  <option selected>Servicio Seleccionado</option>
                  <option value="frenos">Revisión de Frenos</option>
                  <option value="pastillas">Revisión de Pastillas</option>
                  <option value="discos">Revisión de Discos</option>
                  <option value="suspension">Revisión de Suspensión</option>
                  <option value="amortiguadores">Revisión de Amortiguadores</option>
                  <option value="aceite">Cambio de aceite</option>
                  <option value="llantas">Rotación de Llantas</option>
                  <option value="alineacion">Alineación</option>
                </select> */}
                <input type="text" name="service" class="form-control" id="floatingInput" placeholder="Servicio seleccionado" disabled />
                <br/>
                <input type="text" name="date" class="form-control" id="floatingInput" placeholder="Fecha del servicio seleccionado" disabled value={prueba.inicial}/> 
                <br/>
                <input type="text" name="time" class="form-control" id="floatingInput" placeholder="Hora del servicio seleccionado" disabled />
                <br/>
                <input type="text" name="term" class="form-control" id="floatingInput" placeholder="Duracion del servicio seleccionado" disabled />
                <br/>
                <input type="text" name="plate" class="form-control" id="floatingInput" placeholder="Placa del vehículo" disabled  />                 
                <br/>
                <input type="text" name="price" class="form-control" id="floatingInput" placeholder="Precio del servicio" disabled />
                <br/>
                <textarea class="form-control" name="description" id="floatingInput" rows="3" placeholder="Descripción del servicio" disabled ></textarea>
                <br />
                
                  <textarea class="form-control" name="comment" id="floatingInput" rows="3" placeholder="Comentarios del servicio" value={state.comment} onChange={handleChange}></textarea>
                  <br />
                  <select class="form-select" aria-label="Estado" name="vestatus" value={state.vestatus} onChange={handleChange}>
                    <option selected>Seleccione estado del vehículo</option>
                    <option value="frenos">En reparación</option>
                    <option value="frenos">Reparado</option>
                  </select>
                  <br />
                  <input className="btn btn-primary" type="submit" value="Servicio Completado" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-body">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Mis servicios programados</h3></div>
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Hora</th>
                      <th scope="col"> Servicio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">9:00</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">9:30</th>
                      <td>Llantas</td>
                    </tr>
                    <tr>
                      <th scope="row">10:00</th>
                      <td>Amortiguadores</td>
                    </tr>
                    <tr>
                      <th scope="row">10:30</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">11:00</th>
                      <td>Amortiguadores</td>
                    </tr>
                    <tr>
                      <th scope="row">11:30</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">12:00</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">12:30</th>
                      <td>Pastillas</td>
                    </tr>
                    <tr>
                      <th scope="row">13:00</th>
                      <td>Discos</td>
                    </tr>
                    <tr>
                      <th scope="row">13:30</th>
                      <td>Discos</td>
                    </tr>
                    <tr>
                      <th scope="row">14:00</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">14:30</th>
                      <td>Pastillas</td>
                    </tr>
                    <tr>
                      <th scope="row">15:00</th>
                      <td>Discos</td>
                    </tr>
                    <tr>
                      <th scope="row">15:30</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">16:00</th>
                      <td>Aceite</td>
                    </tr>
                    <tr>
                      <th scope="row">16:30</th>
                      <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                    </tr>
                    <tr>
                      <th scope="row">17:00</th>
                      <td>Llantas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
      

                        

  );
}

export default Agenda;