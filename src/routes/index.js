import React from "react";
import Inicial from "../pages/inicial.js";
import Aniversariantes from "../pages/aniversariantes";
import Cadcliente from "../pages/cadastrocliente";
import Consultaclientes from "../pages/consultacliente";
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/'   element={<Inicial/>}/>
      <Route path='/aniversariantes' element={<Aniversariantes/>}/>
      <Route path='/cadcliente'  element={<Cadcliente/>}/>
      <Route path='/consultaclientes'  element={<Consultaclientes/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;