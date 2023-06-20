import React from "react";
import "./App.css";
import Sobre from "./sobre/Sobre";
import Invitacion from "./invitacion/Invitacion";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/invitacion" element={<Invitacion />} />
      </Routes>
    </div>
  );
};

export default App;
