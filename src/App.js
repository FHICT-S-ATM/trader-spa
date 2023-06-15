import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import Login from './pages/Login';
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import {AuthProvider} from "./contexts/AuthContext";
import Logout from "./pages/Logout";

function App() {
    return (

        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/logout" element={<Logout/>}/>
                    <Route exact path="/home" element={<Homepage/>}/>
                    {/*<Route exact path="/profile" element={<Profile/>}/>*/}

                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
