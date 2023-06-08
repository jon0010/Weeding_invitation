import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Footer.css";

const Copyright = () => {
  return (
    <Typography
      style={{ textAlign: "center" }}
      variant="body2"
      color="text.secondary"
    >
      {"Copyright © "}
      <a style={{ textDecoration: "none" }} href="/">
        JN Pereyra - Soluciones en Software || Para los novios los mejores
        deseos, Hecho con mucho ❤️
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Footer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box className="footer">
        <CssBaseline />
        <Box className="footer-container">
          <Box component="footer" className="footer-content">
            <Container maxWidth="sm">
              <Typography variant="body1" style={{ textAlign: "center" }}>
                {/* Contenido del footer */}
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
