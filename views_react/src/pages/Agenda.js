import React, {useState, useEffect} from 'react';
import Session from 'react-session-api'
 
const Agenda = () => {
  const [form, setForm] = useState({
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
    "9:00": "",   
    "9:30": "",
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


  const [actividad, setActividad] = useState({
    "9:00": "Disponible",   
    "9:30": "Disponible",
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
      let hora = {...actividad}
      let identificacion = {...idcitas}
      for (let i=0; i<data.length; i++){
        hora[data[i].hora]= data[i].idservicio;
        identificacion[data[i].hora]=data[i]._id;
      }
      setActividad(hora);
      setidcitas(identificacion);
    })
    .catch(error => console.log(error));
  }, []);

  const [state, setState] = useState({
    vestatus: "",
    comment: "",
    idcita: ""
  })
  const prueba = {"fecha":"2021-12-11","hora":"9"}
  const prueba2 = {"fecha":"2021-02-12","hora":"9"}

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

  return (
    <div className="container">
      <div className="row g-3">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <h1 className="text-center font-weight-light my-4">Gestion de Servicios</h1></div>
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
                      <th id="9:00" scope="row" onClick={actualizarDetalle}>9:00</th>
                      <td id="9:00" name="9:00" style={{backgroundColor:'lightgreen'}} onClick={actualizarDetalle}>{actividad["9:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="9:30"scope="row">9:30</th>
                      <td id="9:30">{actividad["9:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="10:00"scope="row">10:00</th>
                      <td id="10:00">{actividad["10:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="10:30" scope="row">10:30</th>
                      <td id="10:30" style={{backgroundColor:'lightgreen'}}>{actividad["10:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="11:00" scope="row">11:00</th>
                      <td id="11:00">{actividad["11:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="11:30" scope="row">11:30</th>
                      <td id="11:30" style={{backgroundColor:'lightgreen'}}>{actividad["11:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="12:00" scope="row">12:00</th>
                      <td id="12:00" style={{backgroundColor:'lightgreen'}}>{actividad["12:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="12:30" scope="row">12:30</th>
                      <td id="12:30">{actividad["12:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="13:00" scope="row">13:00</th>
                      <td id="13:00">{actividad["13:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="13:30" scope="row">13:30</th>
                      <td id="13:00">{actividad["13:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="14:00" scope="row">14:00</th>
                      <td id="14:00" style={{backgroundColor:'lightgreen'}}>{actividad["14:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="14:30" scope="row">14:30</th>
                      <td id="14:00">{actividad["14:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="15:00" scope="row">15:00</th>
                      <td id="15:00">{actividad["15:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="15:30" scope="row">15:30</th>
                      <td id="15:30"style={{backgroundColor:'lightgreen'}}>{actividad["15:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="16:00" scope="row">16:00</th>
                      <td id="16:00">{actividad["16:00"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="16:30" scope="row">16:30</th>
                      <td id="16:30" style={{backgroundColor:'lightgreen'}}>{actividad["16:30"]}</td>
                    </tr>
                    <tr onClick={actualizarDetalle}>
                      <th id="17:00" scope="row">17:00</th>
                      <td id="17:00">{actividad["17:00"]}</td>
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