import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Inicio from '../pages/Inicio';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default Routing