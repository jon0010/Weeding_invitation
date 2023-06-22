import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const defaultTheme = createTheme();

const Footer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        className="footer"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          py: 2,
          px: 0,
        }}
      >
        <CssBaseline />
        <Box className="footer-container">
          <Box className="footer-content">
            <Container maxWidth="sm">
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                }}
              ></Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant="body2"
                color="text.secondary"
              >
                {"Copyright © "}
                <a style={{ textDecoration: "none" }} href="/">
                  JN Pereyra - Soluciones en Software || Para los novios los
                  mejores deseos, Hecho con mucho ❤️
                </a>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
