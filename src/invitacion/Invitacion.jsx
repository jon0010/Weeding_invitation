import React from "react";
import "./invitacion.css";
import Countdown from "react-countdown";

const Invitacion = () => {
  const Completionist = <p>Se celebró la boda, ¡vivan los Novios!</p>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="contador">
          <div className="cuadro">
            <div>{days !== undefined ? `${days} \u00A0\u00A0Días` : "--"}</div>
          </div>
          <div className="cuadro">
            <div>
              {hours !== undefined ? `${hours} \u00A0\u00A0Horas` : "--"}
            </div>
          </div>
          <div className="cuadro">
            <div>
              {minutes !== undefined ? `${minutes} \u00A0\u00A0Minutos` : "--"}
            </div>
          </div>
          <div className="cuadro">
            <div>
              {seconds !== undefined ? `${seconds} \u00A0\u00A0Segundos` : "--"}
            </div>
          </div>
        </div>
      );
    }
  };

  const targetDate = new Date("October 6, 2023").getTime();

  return (
    <div className="contenedorInvi">
      <div className="T1">
        Camila & Brian <br />
      </div>
      <div className="fechat1">06-10-2023</div>
      <div className="t2">
        El día más importante de nuestras vidas ha llegado y queremos que seas
        parte de él
      </div>
      <div>
        <div className="contador">
          <div className="cajaContador">
            <h2>Viernes 6 de Octubre 2023</h2>
            <h2>¡Nos casamos!</h2>
            <h2>Faltan:</h2>
          </div>
        </div>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
      <div className="t3 container">
        Con nuestro amor, la presencia de Dios entre nosotros y la bendición de
        nuestros padres
        <hr />
        <div className="contt3">
          <div>
            <h3 className="padres">Padres de la Novia</h3>
            <p>Rubén Ricardo Pereyra</p>
            <p>Claudia Jacqueline Pascual</p>
          </div>
          <hr />
          <div>
            <h3 className="padres">Padres del Novio</h3>
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitacion;
