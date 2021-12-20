import React, {useState,useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Session from 'react-session-api';
 
const Services = () => {
  const [detalleServicio, setDetalleServicio] = useState({
    duracion: "Duración",
    precio: "Precio",
    descripcion: "Descripción"
  })

  const actualizarDetalle = (event) => {
      setState({
        ...state, 
        idcita: idcitas[event.target.id]
      });
    fetch(`http://localhost:9000/detallecita/${idcitas[event.target.id]}`)
    .then(response => response.json())
    .then(data => {
      fetch(`http://localhost:9000/detalleservicio/${data.idservicio}`)
      .then(response => response.json())
      .then(ser => {
        setForm({
          ...form, 
          servicio: ser.nombre,
          fecha: data.fecha,
          hora: data.hora,
          duracion: ser["duración"],
          placa: data.placa,
          precio: ser.costo,
          descripcion: ser["descripción"]
        })
      })
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
}

const [serviciom1, setServiciom1] = useState({
  "09:00": "Disponible",   
  "09:30": "Disponible",
  "10:00": "Disponible",
  "10:30": "Disponible",
  "11:00": "Disponible",
  "11:30": "Disponible",
  "12:00": "Disponible",
  "12:30": "Disponible",
  "13:00": "Disponible",
  "13:30": "Disponible",
  "14:00": "Disponible",
  "14:30": "Disponible",
  "15:00": "Disponible",
  "15:30": "Disponible",
  "16:00": "Disponible",
  "16:30": "Disponible",
  "17:00": "Disponible",
})

const [serviciom2, setServiciom2] = useState({
  "09:00": "Disponible",   
  "09:30": "Disponible",
  "10:00": "Disponible",
  "10:30": "Disponible",
  "11:00": "Disponible",
  "11:30": "Disponible",
  "12:00": "Disponible",
  "12:30": "Disponible",
  "13:00": "Disponible",
  "13:30": "Disponible",
  "14:00": "Disponible",
  "14:30": "Disponible",
  "15:00": "Disponible",
  "15:30": "Disponible",
  "16:00": "Disponible",
  "16:30": "Disponible",
  "17:00": "Disponible",
})

const [serviciom3, setServiciom3] = useState({
  "09:00": "Disponible",   
  "09:30": "Disponible",
  "10:00": "Disponible",
  "10:30": "Disponible",
  "11:00": "Disponible",
  "11:30": "Disponible",
  "12:00": "Disponible",
  "12:30": "Disponible",
  "13:00": "Disponible",
  "13:30": "Disponible",
  "14:00": "Disponible",
  "14:30": "Disponible",
  "15:00": "Disponible",
  "15:30": "Disponible",
  "16:00": "Disponible",
  "16:30": "Disponible",
  "17:00": "Disponible",
})

const [idcitas, setidcitas] = useState({
  "09:00": "",   
  "09:30": "",
  "10:00": "",
  "10:30": "",
  "11:00": "",
  "11:30": "",
  "12:00": "",
  "12:30": "",
  "13:00": "",
  "13:30": "",
  "14:00": "",
  "14:30": "",
  "15:00": "",
  "15:30": "",
  "16:00": "",
  "16:30": "",
  "17:00": "",
})

const [state, setState] = useState({
  vestatus: "",
  comment: "",
  idcita: ""
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
  useEffect(() => {
    fetch(`http://localhost:9000/agendadia/61bbc1fea68fa1d1517b94e4`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let hora = {...serviciom1}
      let identificacion = {...idcitas}
      for (let i=0; i<data.length; i++){
        identificacion[data[i].hora]=data[i]._id;
        fetch(`http://localhost:9000/detalleservicio/${data[i].idservicio}`) 
        .then(response => response.json())
        .then(ser => {
          console.log(ser.nombre)
          hora[data[i].hora] = ser.nombre;
        })
        .catch(error => console.log(error));
      }
      setServiciom1(hora);
      setidcitas(identificacion);
    })
    .catch(error => console.log(error));
  }, []);

  useEffect(() => {   
    fetch(`http://localhost:9000/agendadia/61bbc2cda68fa1d1517b94ec`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let hora = {...serviciom2}
      let identificacion = {...idcitas}
      for (let i=0; i<data.length; i++){
        identificacion[data[i].hora]=data[i]._id;
        fetch(`http://localhost:9000/detalleservicio/${data[i].idservicio}`) 
        .then(response => response.json())
        .then(ser => {
          console.log(ser.nombre)
          hora[data[i].hora] = ser.nombre;
        })
        .catch(error => console.log(error));
      }
      setServiciom2(hora);
      setidcitas(identificacion);
    })
    .catch(error => console.log(error));
  
  }, []);

  
  useEffect(() => {
    fetch(`http://localhost:9000/agendadia/61bbc302a68fa1d1517b94f0`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let hora = {...serviciom3}
      let identificacion = {...idcitas}
      for (let i=0; i<data.length; i++){
        identificacion[data[i].hora]=data[i]._id;
        fetch(`http://localhost:9000/detalleservicio/${data[i].idservicio}`) 
        .then(response => response.json())
        .then(ser => {
          console.log(ser.nombre)
          hora[data[i].hora] = ser.nombre;
        })
        .catch(error => console.log(error));
      }
      setServiciom3(hora);
      setidcitas(identificacion);
    })
    .catch(error => console.log(error));
  }, []);


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
                <Form.Control type="date" name='fecha' placeholder="Seleccione fecha"  value={form.fecha} onChange={handleChange}/>
                  <br/> 
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
                  <tr onClick={actualizarDetalle}>
                    <th id="09:00"scope="row">09:00</th>
                    <td class= {serviciom1["09:00"]} id="09:00">{serviciom1["09:00"]}</td>
                    <td class= {serviciom2["09:00"]} id="09:00">{serviciom2["09:00"]}</td>
                    <td class= {serviciom3["09:00"]} id="09:00">{serviciom3["09:00"]}</td> 
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="09:30"scope="row">09:30</th>
                    <td class= {serviciom1["09:30"]} id="09:30">{serviciom1["09:30"]}</td>
                    <td class= {serviciom2["09:30"]} id="09:30">{serviciom2["09:30"]}</td>
                    <td class= {serviciom3["09:30"]} id="09:30">{serviciom3["09:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="10:00"scope="row">10:00</th>
                    <td class= {serviciom1["10:00"]} id="10:00">{serviciom1["10:00"]}</td>
                    <td class= {serviciom2["10:00"]} id="10:00">{serviciom2["10:00"]}</td>
                    <td class= {serviciom3["10:00"]} id="10:00">{serviciom3["10:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="10:30"scope="row">10:30</th>
                    <td class= {serviciom1["10:30"]} id="10:30">{serviciom1["10:30"]}</td>
                    <td class= {serviciom2["10:30"]} id="10:30">{serviciom2["10:30"]}</td>
                    <td class= {serviciom3["10:30"]} id="10:30">{serviciom3["10:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="11:00"scope="row">11:00</th>
                    <td class= {serviciom1["11:00"]} id="11:00">{serviciom1["11:00"]}</td>
                    <td class= {serviciom2["11:00"]} id="11:00">{serviciom2["11:00"]}</td>
                    <td class= {serviciom3["11:00"]} id="11:00">{serviciom3["11:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="11:30"scope="row">11:30</th>
                    <td class= {serviciom1["11:30"]} id="11:30">{serviciom1["11:30"]}</td>
                    <td class= {serviciom2["11:30"]} id="11:30">{serviciom2["11:30"]}</td>
                    <td class= {serviciom3["11:30"]} id="11:30">{serviciom3["11:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="12:00"scope="row">12:00</th>
                    <td class= {serviciom1["12:00"]} id="12:00">{serviciom1["12:00"]}</td>
                    <td class= {serviciom2["12:00"]} id="12:00">{serviciom2["12:00"]}</td>
                    <td class= {serviciom3["12:00"]} id="12:00">{serviciom3["12:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="12:30"scope="row">12:30</th>
                    <td class= {serviciom1["12:30"]} id="12:30">{serviciom1["12:30"]}</td>
                    <td class= {serviciom2["12:30"]} id="12:30">{serviciom2["12:30"]}</td>
                    <td class= {serviciom3["12:30"]} id="12:30">{serviciom3["12:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="13:00"scope="row">13:00</th>
                    <td class= {serviciom1["13:00"]} id="13:00">{serviciom1["13:00"]}</td>
                    <td class= {serviciom2["13:00"]} id="13:00">{serviciom2["13:00"]}</td>
                    <td class= {serviciom3["13:00"]} id="13:00">{serviciom3["13:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="13:30"scope="row">13:30</th>
                    <td class= {serviciom1["13:30"]} id="13:30">{serviciom1["13:30"]}</td>
                    <td class= {serviciom2["13:30"]} id="13:30">{serviciom2["13:30"]}</td>
                    <td class= {serviciom3["13:30"]} id="13:30">{serviciom3["13:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="14:00"scope="row">14:00</th>
                    <td class= {serviciom1["14:00"]} id="14:00">{serviciom1["14:00"]}</td>
                    <td class= {serviciom2["14:00"]} id="14:00">{serviciom2["14:00"]}</td>
                    <td class= {serviciom3["14:00"]} id="14:00">{serviciom3["14:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="14:30"scope="row">14:30</th>
                    <td class= {serviciom1["14:30"]} id="14:30">{serviciom1["14:30"]}</td>
                    <td class= {serviciom2["14:30"]} id="14:30">{serviciom2["14:30"]}</td>
                    <td class= {serviciom3["14:30"]} id="14:30">{serviciom3["14:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="15:00"scope="row">15:00</th>
                    <td class= {serviciom1["15:00"]} id="15:00">{serviciom1["15:00"]}</td>
                    <td class= {serviciom2["15:00"]} id="15:00">{serviciom2["15:00"]}</td>
                    <td class= {serviciom3["15:00"]} id="15:00">{serviciom3["15:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="15:30"scope="row">15:30</th>
                    <td class= {serviciom1["15:30"]} id="15:30">{serviciom1["15:30"]}</td>
                    <td class= {serviciom2["15:30"]} id="15:30">{serviciom2["15:30"]}</td>
                    <td class= {serviciom3["15:30"]} id="15:30">{serviciom3["15:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="16:00"scope="row">16:00</th>
                    <td class= {serviciom1["16:00"]} id="16:00">{serviciom1["16:00"]}</td>
                    <td class= {serviciom2["16:00"]} id="16:00">{serviciom2["16:00"]}</td>
                    <td class= {serviciom3["16:00"]} id="16:00">{serviciom3["16:00"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="16:30"scope="row">16:30</th>
                    <td class= {serviciom1["16:30"]} id="16:30">{serviciom1["16:30"]}</td>
                    <td class= {serviciom2["16:30"]} id="16:30">{serviciom2["16:30"]}</td>
                    <td class= {serviciom3["16:30"]} id="16:30">{serviciom3["16:30"]}</td>
                  </tr>
                  <tr onClick={actualizarDetalle}>
                    <th id="17:00"scope="row">17:00</th>
                    <td class= {serviciom1["17:00"]} id="17:00">{serviciom1["17:00"]}</td>
                    <td class= {serviciom2["17:00"]} id="17:00">{serviciom2["17:00"]}</td>
                    <td class= {serviciom3["17:00"]} id="17:00">{serviciom3["17:00"]}</td>
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