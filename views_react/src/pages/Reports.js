import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
 
const Reports = () => {
  const [state, setState] = useState({
    fechainicial: "",
    fechafinal: "",
    report:""
    
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
        fetch('http://localhost:9000/consultareportes', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(state)
        }).then(response => response.json())
          .then(data => console.log(data));
      }

  return (
        <div className="container">
            <div className="row g-3">
            <div className="card-header">
              <h1 className="text-center font-weight-light my-4"> Generar Reportes</h1>
            </div>
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-body">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">Consultas</h3>
                    </div>
                        <div class="form-floating mb-3">
                        <form onSubmit={handleSubmit}>
                            
                          <br/>
                          <Form.Control type="date" name='fechainicial' placeholder="Seleccione fecha"  value={state.fechainicial} onChange={handleChange}/>
                          {/*<Form.control type="text" name="fechainicial" class="form-control" id="floatingInput" placeholder="Seleccione fecha inicial" value={state.fechainicial} onChange={handleChange}/>*/}

                          <br/>

                          <Form.Control type="date" name="fechafinal" placeholder="Seleccione fecha final" value={state.fechafinal} onChange={handleChange}/>                      

                          <br/>

                          <select class="form-select" aria-label="report" name="report" value={state.report} onChange={handleChange}>
                                <option selected>Seleccione el reporte</option>
                                <option value="servicios">Servicios</option>
                                <option value="asignaciones">Asignaciones</option>
                            
                            </select>

                            <br/>

                          <input className="btn btn-primary" type="submit" value="Consultar" />
                          
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>

                  <div className="col-sm">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-body">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4"> Reporte:  Servicios </h3></div>
                        
                        <label> Revisión de frenos</label> &nbsp; &nbsp; &nbsp;
                        <div class="progress"> 
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'10%', backgroundColor:'#FF7800'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"> 10% </div>
                        </div>
                        <br/>

                        <label> Revisión de pastillas</label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'15%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">15%</div>
                        </div>
                        <br/>

                        <label> Revisión de discos</label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'5%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">5%</div>
                        </div>
                        <br/>

                        <label>Revisión de suspensión </label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'4%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">4%</div>
                        </div>
                        <br/>

                        <label> Revisión de amortiguadores</label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'20%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">20%</div>
                        </div>
                        <br/>

                        <label> Cambio de aceite </label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'24%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">24%</div>
                        </div>
                        <br/>

                        <label> Rotación de llantas </label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'12%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">12%</div>
                        </div>
                        <br/>

                        <label> Alineación </label> &nbsp; &nbsp; &nbsp;
                        <div class="progress">                        
                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:'10%', backgroundColor:'#FF7800'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">10%</div>
                        </div>
                        <br/> 
                        <div class="card text-white bg-primary mb-3">
                                
                                  <div class="card-body" style={{backgroundColor:'darkorange'}}>
                                    <h5 class="card-title"style={{textAlign:'center' }}>Servicios Completados</h5>
                                    <h1 class="card-title" style={{textAlign:'center' }}>  353 </h1>
                                  </div>
                        </div>
            </div>
            </div>
            </div>







            <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Reporte: Asignaciones</h3></div>
                    <table class="table table-hover table-bordered">

                          <thead>
                            <tr>
                              <th scope="col">Fecha</th>
                              <th scope="col">Mecanico </th>
                              <th scope="col">Servicio</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">12/01/2021</th>
                              <td >Mecanico1</td>
                              <td>Frenos</td>                          
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico1</td>
                              <td>Llantas</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Discos</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico3</td>
                              <td>Discos</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                            <td >Mecanico3</td>
                              <td>Aceite</td>
                            </tr>
                            <tr>
                            <th scope="row">12/01/2021</th>
                              <td >Mecanico3</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico1</td>
                              <td>Discos</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico1</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico1</td>
                              <td>Aceite</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Alineación</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Llantas</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Llantas</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico2</td>
                              <td>Aceite</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico3</td>
                              <td>Amortiguadores</td>
                            </tr>
                            <tr>
                            <th scope="row">13/01/2021</th>
                            <td >Mecanico3</td>
                              <td>Llantas</td>
                            </tr>
                          </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                          </ul>
                        </nav>
                    </div>
            </div>
            </div>

                        

  );
}

export default Reports;