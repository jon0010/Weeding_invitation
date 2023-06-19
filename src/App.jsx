import React from "react";
import "./App.css";
import Sobre from "./sobre/Sobre";
import Invitacion from "./invitacion/Invitacion";
import Invitacion2 from "./invitacion2/Invitacion2";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/invitacion" element={<Invitacion />} />
        <Route path="/invitacion2" element={<Invitacion2 />} />
      </Routes>
    </div>
  );
};

export default App;
