import React from "react";
import "./App.css";
import Sobre from "./sobre/Sobre";
import Invitacion from "./invitacion/Invitacion";
import Footer from "../src/footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/invitacion" element={<Invitacion />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
