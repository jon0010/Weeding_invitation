import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./sobre.css";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const Sobre = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://scontent.feze9-1.fna.fbcdn.net/v/t39.30808-6/352133999_6275139392541758_8980223177570125181_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF319KWIBd7FtkBs3R-sFGgWqfsflh9TDlap-x-WH1MOaN-QBWo28JmXz6LkA6511tzz7Gx58IyyMCT3tm3CL2h&_nc_ohc=f0M3QMNT0ZwAX_eR4UV&_nc_oc=AQn0ILLoEcCBoCo9UlPVlv2xXHoJWzj0IBgvdXZoaYc2Mkf_C8oJmMQzInvJSR0NKrc7N6hqIwRRZlj3tz_PYarv&_nc_ht=scontent.feze9-1.fna&oh=00_AfBMZlE8yIL5FB_hiCbcUCc7RqTxVqm9S7pYi8_MrC1wQQ&oe=649307C4)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              my: 12,
              mx: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography component="h1" variant="h5">
              Toca aquí
            </Typography>
            <Link to="/invitacion">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Sobre;
