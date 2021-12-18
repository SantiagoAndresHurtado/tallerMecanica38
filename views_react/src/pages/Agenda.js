import { set } from 'mongoose';
import React, {useState, useEffect} from 'react';
import Session from 'react-session-api'
 
const Agenda = () => {
  const [form, setForm] = useState({
    "idcita": "",
    "servicio": "servicio",   
    "fecha": "fecha",
    "hora": "hora",
    "duracion": "duracion",
    "placa": "placa",
    "precio": "precio",
    "descripcion": "descripcion",
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
          idcita: idcitas[event.target.id],
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


  const [servicio, setServicio] = useState({
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
 
  useEffect(() => {
    fetch(`http://localhost:9000/agendadia/${Session.get("userid")}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let hora = {...servicio}
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
      setServicio(hora);
      setidcitas(identificacion);
    })
    .catch(error => console.log(error));
  }, []);

  const [state, setState] = useState({
    vestatus: "",
    comment: "",
    idcita: ""
  })
  const handleChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:9000/actualizacioncitas', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(state)
    })
    .then(response => response.json())
    .then(data => {
      alert('Sus datos se han guardado exitosamente')
      setState({
        vestatus: "",
        comment: ""
      })
    });
  }

  const borrarCita = (event) => {
    console.log(form.idcita)
    fetch(`http://localhost:9000/borrarcita/${form.idcita}`) 
    .then(response => response.json())
    .then(ser => {
      setServicio({
        ...servicio,
        [form.hora]:"Disponible"
      })
      setForm({
        "idcita": "",
        "servicio": "servicio",   
        "fecha": "fecha",
        "hora": "hora",
        "duracion": "duracion",
        "placa": "placa",
        "precio": "precio",
        "descripcion": "descripcion",
      })
    })
    .catch(error => console.log(error));
  }

  return (
  <div className="container">
        <div className="row g-3">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <h1 className="text-center font-weight-light my-4">Gestión de Servicios</h1></div>
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-body">
                <div class="form-floating mb-3">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="servicio" class="form-control" id="floatingInput" value={form.servicio} disabled />
                  <br/>
                  <input type="text" name="fecha" class="form-control" id="floatingInput" value={form.fecha} disabled/> 
                  <br/>
                  <input type="text" name="hora" class="form-control" id="floatingInput" value={form.hora} disabled />
                  <br/>
                  <input type="text" name="duracion" class="form-control" id="floatingInput" value={form.duracion} disabled />
                  <br/>
                  <input type="text" name="placa" class="form-control" id="floatingInput" value={form.placa} disabled  />                 
                  <br/>
                  <input type="text" name="precio" class="form-control" id="floatingInput" value={form.precio} disabled />
                  <br/>
                  <textarea class="form-control" name="descripcion" id="floatingInput" rows="3" value={form.descripcion} disabled ></textarea>
                  <br />
                  <textarea class="form-control" name="comment" id="floatingInput" rows="3" placeholder="Comentarios del servicio" value={state.comment} onChange={handleChange}></textarea>
                  <br />
                  <select class="form-select" aria-label="Estado" name="vestatus" value={state.vestatus} onChange={handleChange}>
                    <option selected>Seleccione estado del vehículo</option>
                    <option value="En reparación">En reparación</option>
                    <option value="Reparado">Reparado</option>
                  </select>
                  <br />
                  <input className="btn btn-primary" type="submit" value="Servicio Completado" />
                  &nbsp; &nbsp;
                  <input className="btn btn-secondary" type="submit" value="Cancelar Servicio" onClick={borrarCita}/>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-body">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Mis Servicios Programados</h3></div>
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Hora</th>
                      <th scope="col"> Servicio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th id="09:00" scope="row" onClick={actualizarDetalle}>09:00</th>
                      <td id="09:00" name="09:00" style={{backgroundColor:'lightgreen'}} onClick={actualizarDetalle}>{servicio["09:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="09:30"scope="row">09:30</th>
                      <td id="09:30">{servicio["09:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="10:00"scope="row">10:00</th>
                      <td id="10:00">{servicio["10:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="10:30" scope="row">10:30</th>
                      <td id="10:30" style={{backgroundColor:'lightgreen'}}>{servicio["10:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="11:00" scope="row">11:00</th>
                      <td id="11:00">{servicio["11:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="11:30" scope="row">11:30</th>
                      <td id="11:30" style={{backgroundColor:'lightgreen'}}>{servicio["11:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="12:00" scope="row">12:00</th>
                      <td id="12:00" style={{backgroundColor:'lightgreen'}}>{servicio["12:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="12:30" scope="row">12:30</th>
                      <td id="12:30">{servicio["12:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="13:00" scope="row">13:00</th>
                      <td id="13:00">{servicio["13:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="13:30" scope="row">13:30</th>
                      <td id="13:00">{servicio["13:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="14:00" scope="row">14:00</th>
                      <td id="14:00" style={{backgroundColor:'lightgreen'}}>{servicio["14:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="14:30" scope="row">14:30</th>
                      <td id="14:00">{servicio["14:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="15:00" scope="row">15:00</th>
                      <td id="15:00">{servicio["15:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="15:30" scope="row">15:30</th>
                      <td id="15:30"style={{backgroundColor:'lightgreen'}}>{servicio["15:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="16:00" scope="row">16:00</th>
                      <td id="16:00">{servicio["16:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="16:30" scope="row">16:30</th>
                      <td id="16:30" style={{backgroundColor:'lightgreen'}}>{servicio["16:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="17:00" scope="row">17:00</th>
                      <td id="17:00">{servicio["17:00"]}</td>
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