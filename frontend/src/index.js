import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import './index.css';
import {Detail} from "./components/Detail";
import {AuthProvider, useAuth} from "./components/Auth";
import {Login} from "./components/Login";
import {RequireAuth} from "./components/RequireAuth";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/app" element={<App/>}/>
                <Route path="/detail" element={<RequireAuth><Detail/></RequireAuth>}/>  
            </Routes>
        </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

function Index() {
    const auth = useAuth()
    return (
        <div>
            Hello world...
            <br/>
            <br/>
            <NavLink to={'/detail'}>detail</NavLink>

            <br/>
            <br/>
            {!auth.user && (
                <NavLink to={'/login'}>Login</NavLink>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            Application.
        </div>
    );
}