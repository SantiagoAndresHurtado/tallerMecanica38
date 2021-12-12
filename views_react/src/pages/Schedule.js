import React, {useState} from 'react';
import Calendar from '../Calendar_1.jpg';
 
const Schedule = () => {
  const [state, setState] = useState({
    
    vestatus: "",   
    comment: ""
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
     
        fetch('http://localhost:9000/schedule', {
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
                            
                            
                            <select class="form-select" aria-label="Servicios" name="service" disabled value={state.service} onChange={handleChange}>
                                <option selected>Servicio Seleccionado</option>
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

                          <input type="text" name="date" class="form-control" id="floatingInput" placeholder="Fecha del servicio seleccionado" disabled />                      

                          <br/>

                          <input type="text" name="time" class="form-control" id="floatingInput" placeholder="Hora del servicio seleccionado" disabled />                      

                          <br/>

                          <input type="text" name="term" class="form-control" id="floatingInput" placeholder="Duracion del servicio seleccionado" disabled />                      

                          <br/>


                          <input type="text" name="plate" class="form-control" id="floatingInput" placeholder="Placa del vehículo" disabled />
                             
                            <br/>
                      
                          <input type="text" name="price" class="form-control" id="floatingInput" placeholder="Precio del servicio" disabled />

                            <br/>

                            <textarea class="form-control" name="description" id="floatingInput" rows="3" placeholder="Descripción del servicio" disabled ></textarea>
                    
                            <br />

                            <textarea class="form-control" name="comment" id="floatingInput" rows="3" placeholder="Comentarios del servicio" value={state.comment} onChange={handleChange}></textarea>
                    
                             <br />

                             <select class="form-select" aria-label="Estado" name="vstatus" value={state.vestatus} onChange={handleChange}>
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
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Mis Servicios</h3></div>
                    <img src={Calendar} class="img-fluid" />
                    </div>
            </div>
            </div>
            </div>
            </div>

                        

  );
}

export default Schedule;