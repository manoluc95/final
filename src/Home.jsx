import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ImgMediaCard from './components/ImgMediaCard';
import presentationImage from './assets/imagenes/bg-presentation.jpg';
import tiposImage from './assets/imagenes/tipos de vinos/tipos.jpeg';
import elaboracionImage from './assets/imagenes/elaboracion/elaboracion1.jpeg';
import aprenderImage from './assets/imagenes/aprender/aprender1.jpeg';
import bodegasImage from './assets/imagenes/bodegas/portada.jpeg';
import regalarImage from './assets/imagenes/regalar/portada.jpeg';
import enoturismoImage from './assets/imagenes/enoturismo/portada.jpeg';



function Home() {
  const cards = [
    {
      image: tiposImage,
      title: 'Tipos de vinos',
      description: "",
      link: '/TiposDeVinos'
    },
    {
      image: elaboracionImage,
      title: 'Elaboración de vinos',
      description: '',
      link: '/elaboracion'
    },
    {
      image: aprenderImage,
      title: 'Aprender de vinos',
      description: "",
      link: '/link3'
    },
    {
      image: bodegasImage,
      title: 'Bodegas',
      description: '',
      link: '/Bodegas'
    },
    {
      image: regalarImage,
      title: 'Vinos para regalar',
      description: '',
      link: '/tipos-de-vinos'
    },
    {
      image: enoturismoImage ,
      title: 'Enoturismo',
      description: '',
      link: ''
    },
   
  ];

  return (
    <>
      <Box
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${presentationImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          position: "relative",
          '&::before': {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Desvanecido
            zIndex: 1,
          }
        }}
      >
        <Container sx={{ textAlign: "center", zIndex: 2 }}>
          <Typography
            variant="h1"
            color="white"
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            ¿Qué quieres aprender hoy?
          </Typography>
          <Typography
            variant="h3"
            color="white"
            sx={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
              fontSize: { xs: "1.5rem", md: "2rem" },
              mt: 2,
            }}
          >
            Bienvenido a tu plataforma de aprendizaje.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 4, mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ImgMediaCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;