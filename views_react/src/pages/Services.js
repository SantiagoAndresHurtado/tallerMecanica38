import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Session from 'react-session-api';
 
const Services = () => {
  const [state, setState] = useState({
    plate: "",
    service: "",
    employee: "",
    term: "",
    price: "",
    date:"",
    time:"",
    description: ""
  })

  const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = (event) => {
        alert('Sus datos se han guardado exitosamente');
        event.preventDefault();
     
        fetch('http://localhost:9000/services', {
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
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Configurar Servicios</h3></div>
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-body">

                        <div class="form-floating mb-3">
                        <form onSubmit={handleSubmit}>
                            
                            
                            <select class="form-select" aria-label="Servicios" name="service" value={state.service} onChange={handleChange}>
                                <option selected>Seleccione el servicio</option>
                                <option value="frenos">Revisión de Frenos</option>
                                <option value="pastillas">Revisión de Pastillas</option>
                                <option value="discos">Revisión de Discos</option>
                                <option value="suspension">Revisión de Suspensión</option>
                                <option value="amortiguadores">Revisión de Amortiguadores</option>
                                <option value="aceite">Cambio de aceite</option>
                                <option value="llantas">Rotación de Llantas</option>
                                <option value="alineacion">Alineación</option>
                            </select>

                          <br/>
                          
                          <Form.Control type="date" name='date' placeholder="Seleccione fecha"  value={state.date} onChange={handleChange}/>

                          <br/>                          

                          <Form.Control type="time" name='time' placeholder="Seleccione fecha"  value={state.time} onChange={handleChange}/>

                          <br/>

                          <input type="text" name="term" class="form-control" id="floatingInput" placeholder="Duracion" value={state.term} disabled onChange={handleChange}/>                      

                          <br/>

                          <select class="form-select" aria-label="Mecánicos" name="employee" value={state.employee} onChange={handleChange}>
                                <option selected>Seleccione el Mecánico</option>
                                <option value="mecanico1">mecanico1</option>
                                <option value="mecanico2">mecanico2</option>
                                <option value="mecanico3">mecanico3</option>
                            
                            </select>

                          <br/>

                            <input type="text" name="plate" class="form-control" id="floatingInput" placeholder="Placa del vehículo" value={state.plate} onChange={handleChange}/>
                             
                            <br/>
                      
                            <input type="text" name="price" class="form-control" id="floatingInput" placeholder="Precio del servicio" disabled value={state.price} onChange={handleChange} />

                            <br/>
                            <textarea class="form-control" name="description" id="floatingInput" rows="3" placeholder="Descripción del servicio" disabled value={state.description} onChange={handleChange}></textarea>
                    

                            <br />

                          <input className="btn btn-primary" type="submit" value="Confirmar" />
                          
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>

                  <div className="col-sm">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-body">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Disponibilidad de Mecánicos</h3></div>
                    
                    <table class="table table-hover table-bordered">

                          <thead>
                            <tr>
                              <th scope="col">Hora</th>
                              <th scope="col">mecanico1 </th>
                              <th scope="col">mecanico2</th>
                              <th scope="col">mecanico3</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">9:00</th>
                              <td >Aceite</td>
                              <td>Frenos</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">9:30</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Llantas</td>
                              <td>Alineación</td>
                            </tr>
                            <tr>
                              <th scope="row">10:00</th>
                              <td>Suspensión</td>
                              <td>Discos</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                              <th scope="row">10:30</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                              <th scope="row">11:00</th>
                              <td>Discos</td>
                              <td>Amortiguadores</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                              <th scope="row">11:30</th>
                              <td>Amortiguadores</td>
                              <td>Discos</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">12:00</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Aceite</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">12:30</th>
                              <td>Pastillas</td>
                              <td>Amortiguadores</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">13:00</th>
                              <td>Amortiguadores</td>
                              <td>Discos</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">13:30</th>
                              <td>Pastillas</td>
                              <td>Amortiguadores</td>
                              <td>Discos</td>
                            </tr>
                            <tr>
                              <th scope="row">14:00</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Aceite</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">14:30</th>
                              <td>Pastillas</td>
                              <td>Alineación</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">15:00</th>
                              <td>Discos</td>
                              <td>Llantas</td>
                              <td>Aceite</td>
                            </tr>
                            <tr>
                              <th scope="row">15:30</th>
                              <td>Pastillas</td>
                              <td>Llantas</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">16:00</th>
                              <td>Pastillas</td>
                              <td>Aceite</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">16:30</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Amortiguadores</td>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                            </tr>
                            <tr>
                              <th scope="row">17:00</th>
                              <td style={{backgroundColor:'lightgreen'}}>Disponible</td>
                              <td>Llantas</td>
                              <td>Discos</td>
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
 

export default Services;