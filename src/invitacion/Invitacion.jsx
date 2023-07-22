import React, { useState, useEffect, useRef } from "react";
import "./invitacion.css";
import Countdown from "react-countdown";
import iglesia from "../assets/iglesia.jpg";
import MapModal from "../mapsModal/MapsModal";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/system";
import siluetaFem from "../assets/siluetaFem.png";
import siluetaMasc from "../assets/siluetaMasc.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import final from "../assets/final.jpg";
import Footer from "../footer/Footer";
import ringCelu2 from "../assets/ringCelu2.jpeg";
import ringPC from "../assets/ringPC.jpeg";
import "animate.css";
import backgroundMusic from "../assets/OSTDBGT.mp3";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";

const LargeEmailIcon = styled(EmailIcon)`
  font-size: 5em;
`;

const Invitacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });

  const audioRef = useRef(null);

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sendMessageNovia = () => {
    const numeroDestinatario = "+5491168930316";
    const mensaje =
      "Hola, soy Camila. ¡Mandame un mensaje y te responderé en cuanto lo vea! 🌞";
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
      "Hola, soy Brian. ¡Mandame un mensaje y te responderé en cuanto lo vea! 🌞";
    const url =
      "https://wa.me/" +
      numeroDestinatario +
      "?text=" +
      encodeURIComponent(mensaje);
    window.open(url);
  };

  const Completionist = <p>¡Se celebró la boda! ¡Vivan los Novios!</p>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="col-md-12 col-12 mx-auto mb-2">
          <div className="row">
            <div className="col-md-3 col-sm-6 mt-3">
              <div
                className="countdown-box d-flex justify-content-start"
                style={{
                  border: "solid 1px gold",
                  borderRadius: "1em",
                  width: "8em",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px",
                  margin: "0 auto",
                }}
              >
                <div>
                  {days !== undefined ? `${days} \u00A0\u00A0Días` : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-3">
              <div
                className="countdown-box d-flex justify-content-center"
                style={{
                  border: "solid 1px gold",
                  borderRadius: "1em",
                  width: "8em",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px",
                  margin: "0 auto",
                }}
              >
                <div>
                  {hours !== undefined ? `${hours} \u00A0\u00A0Horas` : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-3 mb-md-3">
              <div
                className="countdown-box d-flex justify-content-center"
                style={{
                  border: "solid 1px gold",
                  borderRadius: "1em",
                  width: "8em",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px",
                  margin: "0 auto",
                }}
              >
                <div>
                  {minutes !== undefined
                    ? `${minutes} \u00A0\u00A0Minutos`
                    : "--"}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-3">
              <div
                className="countdown-box d-flex justify-content-center"
                style={{
                  border: "solid 1px gold",
                  borderRadius: "1em",
                  width: "8em",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  padding: "10px",
                  margin: "0 auto",
                }}
              >
                <div>
                  {seconds !== undefined
                    ? `${seconds} \u00A0\u00A0Segundos`
                    : "--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const targetDate = new Date("October 6, 2023");
  targetDate.setHours(19);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);
  targetDate.setMilliseconds(0);

  const targetDateTime = targetDate.getTime();

  return (
    <div
      className="container-fluid backgroundContainer m-0 p-0"
      style={{ overflowX: "hidden" }}
    >
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mp3" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "9999",
          fontSize: isSmallScreen ? "0.6em" : "1.3em",
          marginBottom: isSmallScreen ? "80px" : "40px",
          color: "#897E7E",
          opacity: 1,
        }}
        onClick={() => setIsMusicPlaying(!isMusicPlaying)}
      >
        {isMusicPlaying ? (
          <VolumeUp style={{ fontSize: "6em" }} />
        ) : (
          <>
            <VolumeOff style={{ fontSize: "6em" }} />
            <span hidden>Botón adicional</span>
          </>
        )}
      </button>
      <div className="row position-relative">
        <img
          src={isMobile ? ringCelu2 : ringPC}
          className="bg-img-fluid m-0 p-0"
          alt="fondo"
        />
        <div
          className="col-md-12 col-sm position-absolute text-dark fontCustom3 ms-2"
          style={{
            fontSize: "9em",
            textShadow: "0px 0px 10px gold",
            top: 0,
            right: 0,
            transform: "translate(50%, 40%)",
          }}
        >
          <br className="d-md-none" />
          <span className="d-none d-md-inline" style={{ fontSize: ".9em" }}>
            Camila & Brian
            <br className="d-none d-md-inline" />
            06-10-2023
          </span>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 text-center py-4 fs-2 fontCustom4">
          {" "}
          El día más importante de nuestras vidas ha llegado y queremos que seas
          parte de él
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-8 mt-5 mx-auto text-center fontCustom2">
          <h2>Te invitamos a nuestra boda</h2>
          <h2>Viernes 6 de Octubre 2023</h2>
          <h2>¡Nos casamos!</h2>
          <h2>Faltan:</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12 mx-auto d-flex justify-content-between flex-wrap mt-2 mb-3">
          <Countdown date={targetDateTime} renderer={renderer} />
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 text-center py-4 fs-2 mb-5 fontCustom4">
          Con nuestro amor, la bendición de Dios y la de nuestros padres
        </div>
      </div>
      <div className="row mx-auto d-flex justify-content-center flex-wrap text-center">
        <div className="col-md-6 col-sm-12 mb-4 fontCustom4 fs-4">
          <h3 className="fs-1">Padres de la Novia</h3>
          <p>Rubén Ricardo Pereyra</p>
          <p>Claudia Jacqueline Pascual</p>
        </div>
        <div className="col-md-6 col-sm-12 fontCustom4 fs-4">
          <h3 className="fs-1">Padres del Novio</h3>
          <p>Jose Wilder Vargas</p>
          <p>Adriana Virginia Torres</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 text-center py-4 fs-2 fontCustom4">
          Tu presencia es importante para nosotros, nos gustaría mucho que nos
          acompañaras
        </div>
      </div>
      <hr />
      <div className="row mb-5">
        <div className="col-12 text-center p-3 fs-3 fontCustom4">
          Ubicación de la ceremonia
        </div>
        <div className="col-12 text-center">
          <img
            src={iglesia}
            alt="fotoIglesia"
            className="rounded-circle"
            style={{
              width: "200px",
              display: "block",
              margin: "0 auto",
              boxShadow: "4px 5px 5px rgba(100, 100, 100, 100.5)",
            }}
          />
          <br />
          <p className="col-12 text-center p-3 fs-4 fontCustom2">
            Avenida Presidente Perón 2758 - San Justo
          </p>
          <button className="botonMapa mb-4" onClick={handleButtonClick}>
            Ver ubicación
          </button>
        </div>
        {modalIsOpen && (
          <div className="col-md-6 col-12 mx-auto text-center">
            <MapModal />
            <button className="botonMapa mt-4" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        )}
        {modalIsOpen}
      </div>
      <hr />
      <div className="row">
        <div className="col-12 text-center py-4 fs-2 fontCustom4">
          ¡Que nos acompañes es lo más importante! Y si está en tu disposición
          realizar una muestra de cariño, estaremos muy agradecidos
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 col-12 mx-auto text-center fs-3 fontCustom4">
          <h3 className="fs-1 mb-5">Lluvia de Sobres</h3>
          <LargeEmailIcon /> <br />
          <p className="mb-5">
            "La lluvia de sobres es la tradición de regalar dinero en efectivo a
            los novios en un sobre el día del evento."
          </p>
          <p className="mb-5">¡Gracias!</p>
          <p className="mb-5">Esperamos verte en este día tan especial</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 col-12 mx-auto text-center fontCustom4">
          <h3 className="fs-1">Código de Vestimenta</h3>
          <div className="container mt-3">
            <div className="container mt-3">
              <div className="row row-cols-sm-1 row-cols-md-2 justify-content-sm-center">
                <div className="col d-flex justify-content-center mb-3">
                  <img
                    src={siluetaMasc}
                    alt="siluetaH"
                    className="mx-auto mb-sm-0 me-sm-5"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "440px",
                      maxHeight: "470px",
                    }}
                  />
                </div>
                <div className="col d-flex justify-content-center">
                  <img
                    src={siluetaFem}
                    alt="siluetaF"
                    className="mx-auto"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "440px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 fs-2 mb-5">Elegante Sport</p>
        </div>
      </div>
      <hr />
      <div className="row text-center mb-5">
        <div className="col-md-12 col-12 mx-auto fontCustom4">
          <h3 className="fs-1">Contacto</h3>
          <p className="fs-3 mt-4 mb-5">
            ¿Tienes alguna consulta? ¡Comunícate con los novios!
          </p>
          <div>
            <button
              style={{
                backgroundColor: "rgb(0, 168, 132)",
                color: "white",
                padding: "0.9em",
                borderRadius: "1em",
                marginRight: "1em",
              }}
              onClick={() => sendMessageNovia()}
            >
              <WhatsAppIcon /> Novia
            </button>
            <button
              style={{
                backgroundColor: "rgb(0, 168, 132)",
                color: "white",
                padding: "0.9em",
                borderRadius: "1em",
                marginLeft: "1em",
              }}
              onClick={() => sendMessageNovio()}
            >
              <WhatsAppIcon /> Novio
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 col-sm-12 mx-auto text-center">
          <img src={final} alt="fotoFinal" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center py-4 fs-2 fontCustom4">
          Nos encantaría que nos acompañes en este día tan especial
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invitacion;
