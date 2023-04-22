import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Search from './pages/Search'
import MapView from './pages/MapView'
import AddForm from './pages/form/AddForm'
import React from "react";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div>
        <Toaster/>
        <nav className="Navigation">
            <ul className="top-nav">
                <li className="nav-list"><Link className="nav-ref" to="/Map"><i/>Карта</Link></li>
                <li className="nav-list"><Link className="nav-ref" to="/Search">Поиск</Link></li>
                <li className="nav-list"><Link className="nav-ref" to="/AddForm">Добавить</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/AddForm" element={<AddForm/>}/>
            <Route path="/Search" element={<Search/>}/>
            <Route path="/Map" element={<MapView/>}/>
            <Route path="/" element={<div>About</div>}/>
        </Routes>
    </div>
  );
}

export default App;
