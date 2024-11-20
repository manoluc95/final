import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ImgMediaCard from './components/ImgMediaCard';
import presentationImage from './assets/imagenes/bg-presentation.jpg';


function Home() {
  const cards = [
    {
      image: '/assets/images/Untitled design.png',
      title: 'Tipos de vinos',
      description: 'Description for card 1',
      link: '/TiposDeVinos'
    },
    {
      image: '',
      title: 'Elaboración de vinos',
      description: '',
      link: '/elaboracion'
    },
    {
      image: '',
      title: 'Aprender de vinos',
      description: 'Description for card 3',
      link: '/link3'
    },
    {
      image: '',
      title: 'Bodegas',
      description: '',
      link: '/Bodegas'
    },
    {
      image: '',
      title: 'Curiosidades',
      description: 'Description for card 1',
      link: '/tipos-de-vinos'
    },
    {
      image: '/assets/images/Untitled design.png',
      title: 'Tipos de vinos',
      description: 'Description for card 1',
      link: '/tipos-de-vinos'
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