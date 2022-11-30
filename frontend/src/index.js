import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import {Detail} from "./components/Detail";
import {Login} from "./components/Login";
import {RequireAuth} from "./components/RequireAuth";
import {List} from "./components/List";
import {Edit} from "./components/Edit";
import {Navigation} from "./components/Navigation";

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/detail" element={<RequireAuth><Detail/></RequireAuth>}/>
            <Route path="/edit" element={<RequireAuth><Edit/></RequireAuth>}/>
        </Routes>
        
    </BrowserRouter>
);

function Index() {
    return (
        <div>
            <Navigation/>
            <div className="container mx-auto mt-8">
                <article className="group w-1/3 mx-auto">
                    <img
                        alt="Lava"
                        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />
    
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">
                            代码段分享
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                            Talk is cheap. Show me the code.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}
