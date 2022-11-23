import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListComponent from "./components/List";

import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/app" element={<App />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

function Index() {
    
    return(
        <div>
            Hello world!
            <br/>
            <div>
                <ListComponent />
            </div>
        </div>
    );
}

function App() {
    return(
        <div>
            Application.
        </div>
    );
}