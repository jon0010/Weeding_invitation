import React, { useState } from "react";
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

const LargeEmailIcon = styled(EmailIcon)`
  font-size: 5em; // Ajusta el tamaño según tus necesidades
`;

const Invitacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
      <div className="t3">
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
            <p>Jose Wilde Vargas</p>
            <p>Adriana Virginia Torres</p>
          </div>
        </div>
      </div>
      <div className="t4">
        Tu presencia es importante para nosotros, nos gustaria mucho que nos
        acompañaras
        <div>
          <p>Ubicacion de la ceremonia</p>
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
        <p>
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </p>
      </div>

      <div className="t6">
        <h3>Lluvia de Sobres</h3>
        <LargeEmailIcon /> <br /> "La lluvia de sobres, es la tradición de
        regalar dinero en efectivo a los novios en un sobre el día del evento"{" "}
        <br />
        Gracias!! <br />
        Espero verte en este día tan especial
      </div>
      <div className="t7">
        <h3>Código de Vestimenta</h3>
        <div className="medidaSilueta">
          <img src={siluetaM} alt="siluetaH" className="medidaM" />
          <div className="medidaSilueta">
            <img src={siluetaF} alt="siluetaF" className="medidaF" />
          </div>
        </div>
        Elegant Sport{" "}
      </div>
      <div className="t4">
        <h3 className="t4">Contacto</h3>
        <p>Tenes alguna consulta?? Comunicate con los novios!</p>
        <div>
          <button className="buttonCont">
            <WhatsAppIcon /> Novia
          </button>
          <button className="buttonCont2">
            <WhatsAppIcon /> Novio
          </button>
        </div>
      </div>
      <div className="fotoFinal">
        <img src={final} alt="fotoFinal" />
      </div>
      <div className="t9">
        <p>
          ¡Que nos acompañes es lo más importante! Y sí está en tu disposición
          realizar una muestra de cariño estaremos muy agradecidos
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Invitacion;
