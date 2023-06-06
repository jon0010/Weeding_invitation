import React from "react";
import Sobre from "./sobre/Sobre";
import Invitacion from "./invitacion/Invitacion";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/invitacion" element={<Invitacion />} />
      </Routes>
    </>
  );
};

export default App;
