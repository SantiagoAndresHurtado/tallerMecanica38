import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Error from "./components/Errors";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";
import Registro from "./pages/Registro";
import Schedule from "./pages/Schedule";
import Services from "./pages/Services";
import './App.css'

class App extends Component{
    render(){
        return(
            <><BrowserRouter>
                <Navbar />
                <div className="container mt-2" style={{ marginTop: 40 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Registro" element={<Registro />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Reports" element={<Reports />} />
                        <Route path="/Schedule" element={<Schedule />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </BrowserRouter><Footer /></>
        );
    }
}

export default App;