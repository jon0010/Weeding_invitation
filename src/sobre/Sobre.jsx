import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./sobre.css";

function Sobre() {
  const [showLetrero, setShowLetrero] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLetrero(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="contenedorSobre"></div>
      <Link to="/invitacion">
        <img className="logo" src={logo} alt="logo" />
        {showLetrero && <div className="letrero">Toca aquí</div>}
      </Link>
    </>
  );
}

export default Sobre;
