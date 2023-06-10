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
              "url(https://scontent.feze12-1.fna.fbcdn.net/v/t39.30808-6/352133999_6275139392541758_8980223177570125181_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=UrNu3kfTZKEAX_0wN-x&_nc_oc=AQlRU6-rFMs2bOzg3jAH1j4LtEXT8objlhdzi0TLljGOITFcY828WSaH6IvwkNVMuilM8PNiLhsCH5W_bjD83uT2&_nc_ht=scontent.feze12-1.fna&oh=00_AfDsCcyDw3xqD-oWXFWsD_iS3JwwRbLvtBR8z_oqOsmlEA&oe=64872A44)",
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
