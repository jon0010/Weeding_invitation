import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import imagenSobre from "../assets/imagenSobre.jpeg";
import "./sobre.css";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";

const defaultTheme = createTheme();

const Sobre = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* Texto y Logo - md y superiores */}
        <Hidden smDown>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "space-around", // Centrar horizontalmente
              alignItems: "center", // Centrar verticalmente
              flexDirection: "column",
              height: "100%", // Ocupar la altura completa
            }}
          >
            <Typography component="h1" variant="h5">
              Toca aquí
            </Typography>
            <Link to="/invitacion">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Grid>
        </Hidden>
        {/* Imagen de fondo - md y superiores */}
        <Hidden smDown>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage: `url(${imagenSobre})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%", // Ocupar la altura completa
            }}
          />
        </Hidden>
        {/* Logo - pantallas sm */}
        <Hidden mdUp>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center", // Centrar horizontalmente
              alignItems: "center", // Centrar verticalmente
              flexDirection: "column",
              height: "66.66%", // Ocupar 2/3 de la altura disponible
            }}
          >
            <Typography component="h1" variant="h5">
              Toca aquí
            </Typography>
            <Link to="/invitacion">
              <img
                className="logo"
                src={logo}
                alt="logo"
                style={{ width: "50%", marginTop: "20px" }}
              />
            </Link>
          </Grid>
        </Hidden>
        {/* Imagen de fondo - pantallas sm */}
        <Hidden mdUp>
          <Grid
            item
            xs={12}
            sx={{
              backgroundImage: `url(${imagenSobre})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "33.33%", // Ocupar 1/3 de la altura disponible
            }}
          />
        </Hidden>
      </Grid>
    </ThemeProvider>
  );
};

export default Sobre;
