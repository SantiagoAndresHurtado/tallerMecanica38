import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Session from 'react-session-api';
 
const Services = () => {
  const [detalleServicio, setDetalleServicio] = useState({
    duracion: "Duración",
    precio: "Precio",
    descripcion: "Descripción"
  })

const handleService = (event) => {
  fetch(`http://localhost:9000/detalleservicio/${event.target.value}`)
  .then(response => response.json())
  .then(ser => {
    setDetalleServicio({
      ...detalleServicio,
      duracion: ser["duración"],
      precio: ser.costo,
      descripcion: ser["descripción"],
    })
    setForm({
      ...form,
      idservicio: ser._id
    })
  })
}

  const [form, setForm] = useState({
    idservicio: "",
    idcolaborador: "",
    placa: "",
    hora: "",
    fecha: ""
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:9000/crearCita', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // We convert the React form to JSON and send it as the POST body
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(data => {
      alert('Sus datos se han guardado exitosamente')
      setDetalleServicio({
        duracion: "Duración",
        precio: "Precio",
        descripcion: "Descripción"
      })
      setForm({
        idservicio: "",
        idcolaborador: "",
        placa: "",
        hora: "",
        fecha: ""
      })

    });
  }

  return (
    <div className="container">
            <div className="row g-3">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <h1 className="text-center font-weight-light my-4">Configurar Servicios</h1>
              </div>
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-body">
              <div class="form-floating mb-3">
                <form onSubmit={handleSubmit}>
                  <select class="form-select" aria-label="Servicios" name="idservicio" value={form.idservicio} onChange={handleService}>
                    <option selected>Seleccione el servicio</option>
                    <option value="61be0fe2ff24f653594bf280">Revisión de Frenos</option>
                    <option value="61be1006ff24f653594bf282">Revisión de Pastillas</option>
                    <option value="61be101cff24f653594bf284">Revisión de Discos</option>
                    <option value="61be1029ff24f653594bf286">Revisión de Suspensión</option>
                    <option value="61be1037ff24f653594bf288">Revisión de Amortiguadores</option>
                    <option value="61be1044ff24f653594bf28a">Cambio de aceite</option>
                    <option value="61be105eff24f653594bf28e">Rotación de Llantas</option>
                    <option value="61be1050ff24f653594bf28c">Alineación</option>
                  </select>
                  <br/>
                  <input type="text" name="duracion" class="form-control" id="floatingInput" placeholder="Duracion" value={detalleServicio.duracion + ' ' + '(minutos)'} disabled/>                      
                  <br/>                     
                  <input type="text" name="precio" class="form-control" id="floatingInput" placeholder="Precio del servicio" disabled value={'(COP)' + ' ' +  detalleServicio.precio} />
                  <br/>
                  <textarea class="form-control" name="descripcion" id="floatingInput" rows="3" placeholder="Descripción del servicio" disabled value={detalleServicio.descripcion}></textarea>  
                  <br/>                        
                  <Form.Control type="date" name='fecha' placeholder="Seleccione fecha"  value={form.fecha} onChange={handleChange}/>
                  <br/>                          
                  <Form.Control type="time" name='hora' placeholder="Seleccione hora"  value={form.hora} onChange={handleChange}/>
                  <br/>
                  <select class="form-select" aria-label="Mecánicos" name="idcolaborador" value={form.idcolaborador} onChange={handleChange}>
                    <option selected>Seleccione el Mecánico</option>
                    <option value="61bbc1fea68fa1d1517b94e4">mecanico1</option>
                    <option value="61bbc2cda68fa1d1517b94ec">mecanico2</option>
                    <option value="61bbc302a68fa1d1517b94f0">mecanico3</option>
                  </select>
                  <br/>
                  <input type="text" name="placa" class="form-control" id="floatingInput" placeholder="Placa del vehículo" value={form.placa} onChange={handleChange}/>                         
                  <br />
                  <input className="btn btn-primary" type="submit" value="Confirmar" /> 
                  &nbsp; &nbsp;
                  <input className="btn btn-secondary" type="submit" value="Cancelar Servicio" disabled />                  
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