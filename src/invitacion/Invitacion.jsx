import React, { useState, useEffect } from "react";
import "./invitacion.css";
import Countdown from "react-countdown";
import iglesia from "../assets/iglesia.jpg";
import MapModal from "../mapsModal/MapsModal";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/system";
import siluetaM from "../assets/siluetaM.jpg";
import siluetaF from "../assets/siluetaF.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import final from "../assets/final.jpg";
import Footer from "../footer/Footer";
import "animate.css";

const LargeEmailIcon = styled(EmailIcon)`
  font-size: 5em;
`;

const Invitacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sendMessageNovia = () => {
    const numeroDestinatario = "+5491168930316";
    const mensaje =
      "Hola, soy camila, mandame un mensaje que ni bien lo veo te respondo! 🌞";
    const url =
      "https://wa.me/" +
      numeroDestinatario +
      "?text=" +
      encodeURIComponent(mensaje);
    window.open(url);
  };

  const sendMessageNovio = () => {
    const numeroDestinatario = "+5491123930997";
    ("Hola, soy brian, mandame un mensaje que ni bien lo veo te respondo! 🌞");
    const url =
      "https://wa.me/" +
      numeroDestinatario +
      "?text=" +
      encodeURIComponent(mensaje);
    window.open(url);
  };

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
        <div className="animation1">
          El día más importante de nuestras vidas ha llegado y queremos que seas
          parte de él
        </div>
      </div>
      <div>
        <div className="contador">
          <div className="cajaContador">
            <h2 className="animation2">Viernes 6 de Octubre 2023</h2>
            <h2 className="animation2">¡Nos casamos!</h2>
            <h2 className="animation2">Faltan:</h2>
          </div>
        </div>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
      <div className="t3">
        <div className="animation3 animated">
          Con nuestro amor, la presencia de Dios entre nosotros y la bendición
          de nuestros padres
        </div>
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
            <p>Jose Wilde Vargas</p>
            <p>Adriana Virginia Torres</p>
          </div>
        </div>
      </div>
      <div className="t4">
        <div className="animation4">
          Tu presencia es importante para nosotros, nos gustaria mucho que nos
          acompañaras
        </div>
        <div>
          <p className="animation4">Ubicacion de la ceremonia</p>
          <img src={iglesia} alt="fotoIglesia" className="iglesia" />
          <br />
          <p>Avenida presidente peron 2758 - San justo</p>
          <button onClick={handleButtonClick}>Ver ubicacion</button>
        </div>
        {modalIsOpen && (
          <div className="modal-body">
            <MapModal />
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
        {modalIsOpen}
      </div>
      <div className="t5">
        <div className="animation5">
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </div>
      </div>

      <div className="t6">
        <div className="animation6">
          <h3>Lluvia de Sobres</h3>
          <LargeEmailIcon /> <br /> "La lluvia de sobres, es la tradición de
          regalar dinero en efectivo a los novios en un sobre el día del evento"{" "}
          <br />
          Gracias!! <br />
          Espero verte en este día tan especial
        </div>
      </div>
      <div className="t7">
        <div className="animation7">
          <h3>Código de Vestimenta</h3>
          <div className="medidaSilueta">
            <img src={siluetaM} alt="siluetaH" className="medidaM" />
            <div className="medidaSilueta">
              <img src={siluetaF} alt="siluetaF" className="medidaF" />
            </div>
          </div>
          Elegant Sport{" "}
        </div>
      </div>
      <div className="t4">
        <div className="animation8">
          <h3 className="t4">Contacto</h3>
          <p>Tenes alguna consulta?? Comunicate con los novios!</p>
          <div>
            <button className="buttonCont" onClick={() => sendMessageNovia()}>
              <WhatsAppIcon /> Novia
            </button>
            <button className="buttonCont2" onClick={() => sendMessageNovio()}>
              <WhatsAppIcon /> Novio
            </button>
          </div>
        </div>
      </div>
      <div className="fotoFinal">
        <img src={final} alt="fotoFinal" />
      </div>
      <div className="t9">
        <div className="animation9">
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invitacion;
