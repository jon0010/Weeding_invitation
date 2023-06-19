import React, { useState } from "react";
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

const Invitacion2 = () => {
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
    const mensaje =
      "Hola, soy brian, mandame un mensaje que ni bien lo veo te respondo! 🌞";
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
    <div className="container contenedorInvi">
      <div className="row">
        <div className="md-col-6 xs-col-12 T1 mx-auto">
          Camila & Brian <br />
        </div>
        <div className="md-col-6 xs-col-12 fechat1">06-10-2023</div>
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto t2">
          El día más importante de nuestras vidas ha llegado y queremos que seas
          parte de él
        </div>
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto T1 "></div>
        <div className="row">
          <h2 className="col-4">Viernes 6 de Octubre 2023</h2>
          <h2 className="col-4">¡Nos casamos!</h2>
          <h2 className="col-4">Faltan:</h2>
        </div>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto">
          Con nuestro amor, la presencia de Dios entre nosotros y la bendición
          de nuestros padres
        </div>
        <hr />
        <div className="row">
          <div className="md-col-6 xs-col-12">
            <h3 className="padres">Padres de la Novia</h3>
            <p>Rubén Ricardo Pereyra</p>
            <p>Claudia Jacqueline Pascual</p>
          </div>
          <hr />
          <div className="md-col-6 xs-col-12">
            <h3 className="padres">Padres del Novio</h3>
            <p>Jose Wilde Vargas</p>
            <p>Adriana Virginia Torres</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12">
          Tu presencia es importante para nosotros, nos gustaria mucho que nos
          acompañaras
        </div>
        <div>
          <p className="col-12 mx-auto">Ubicacion de la ceremonia</p>
          <img src={iglesia} alt="fotoIglesia" className="iglesia" />
          <br />
          <p>Avenida presidente peron 2758 - San justo</p>
          <button onClick={handleButtonClick}>Ver ubicacion</button>
        </div>
        {modalIsOpen && (
          <div className="md-col-6 xs-col-12 mx-auto">
            <MapModal />
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
        {modalIsOpen}
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12">
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </div>
      </div>

      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto">
          <h3>Lluvia de Sobres</h3>
          <LargeEmailIcon /> <br /> "La lluvia de sobres, es la tradición de
          regalar dinero en efectivo a los novios en un sobre el día del evento"{" "}
          <br />
          Gracias!! <br />
          Espero verte en este día tan especial
        </div>
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto">
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
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto">
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
      <div className="md-col-12 xs-col-12 mx-auto">
        <img src={final} alt="fotoFinal" />
      </div>
      <div className="row">
        <div className="md-col-12 xs-col-12 mx-auto">
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invitacion2;
