import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import About from "./pages/About";
import Error from "./components/Errors";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Schedule from "./pages/Schedule";
import Services from "./pages/Services";
import Users from "./pages/Users";
import './App.css'

class App extends Component{
    render(){
        return(
            <><BrowserRouter>
                <Navbar />
                <div className="container mt-2" style={{ marginTop: 40 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Users" element={<Users />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Reports" element={<Reports />} />
                        <Route path="/Schedule" element={<Schedule />} />
                    </Routes>
                </div>
            </BrowserRouter><Footer /></>
            // <div className="App">  
            //     <Users />  
            // </div>  
        );
    }
}

export default App;