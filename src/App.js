import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Search from './pages/Search'
import Map from './pages/Map'
import AddForm from './pages/AddForm'

function App() {
  return (
    <div>
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
            <Route path="/Map" element={<Map/>}/>
        </Routes>
    </div>

  );
}

export default App;
