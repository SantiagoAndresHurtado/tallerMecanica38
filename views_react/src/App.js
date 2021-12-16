import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from 'react-session-api'

import Error from "./components/Errors";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";
import Registro from "./pages/Registro";
import Agenda from "./pages/Agenda";
import Services from "./pages/Services";
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            logueado: false,
            userid: "",
            rol: ""
        }
    }

    componentDidMount() {
        const logueado = (data) => {
          this.setState({ 
              logueado: data["logueado"],
              userid: data["userid"],
              rol: data["rol"]
            });
        };
        Session.onSet(logueado);
    }

    renderLogin(){
        return(
            <><BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Home" element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter><Footer /></>
        );
    }
    renderApp(){
        if (this.state.rol == "Administrador"){
            return(
                <><BrowserRouter>
                    <Navbar />
                    <div className="container mt-2" style={{ marginTop: 40 }}>
                        <Routes>
                            <Route exact path="/Registro" element={<Registro />} />
                            <Route exact path="/Services" element={<Services />} />
                            <Route exact path="/Reports" element={<Reports />} />
                            <Route exact path="/Agenda" element={<Agenda />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </BrowserRouter><Footer /></>
            );
        }
        else if (this.state.rol == "Mecánico"){
            return(
                <><BrowserRouter>
                    <Navbar />
                    <div className="container mt-2" style={{ marginTop: 40 }}>
                        <Routes>
                            <Route exact path="/Agenda" element={<Agenda />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </BrowserRouter><Footer /></>
            );
        }
        else if (this.state.rol == "Recepcionista"){
            return(
                <><BrowserRouter>
                    <Navbar />
                    <div className="container mt-2" style={{ marginTop: 40 }}>
                        <Routes>
                            <Route exact path="/Registro" element={<Registro />} />
                            <Route exact path="/Services" element={<Services />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </BrowserRouter><Footer /></>
            );
        }
        else{
            return(
                <><BrowserRouter>
                <Navbar />
                <div className="container mt-2" style={{ marginTop: 40 }}>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Home" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter><Footer /></>
            );
        }
    }
    render(){
        if(this.state.logueado){
            return this.renderApp();
        }
        else{
            return this.renderLogin();
        }
    }
}

export default App;