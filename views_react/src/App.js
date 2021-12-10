import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Error from "./components/Errors";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import logo from './logo.svg';
import './App.css'

// class App extends Component{
//     state = {
//         data: null
//     };

//     componentDidMount(){
//         this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }

//     callBackendAPI = async () => {
//         const response = await fetch('/appointment');
//         const body = await response.json();

//         if (response.status !== 200){
//             throw Error(body.message)
//         }
//         return body;
//     };

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Navbar />
                <div className="container mt-2" style={{ marginTop: 40 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/profile/:name" element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;