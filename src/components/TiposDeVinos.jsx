import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ImgMediaCard from "./ImgMediaCard.jsx";

import descargaImage from '../assets/imagenes/tipos de vinos/tintos/descarga.jpeg';
import blancoImage from '../assets/imagenes/tipos de vinos/blancos/blanco.jpeg';
import roseImage from '../assets/imagenes/tipos de vinos/rose/rose.jpeg';

function TiposDeVinos() {
  const cards = [
    {
      image: descargaImage,
      title: 'TINTO',
      description: 'De color rojo, el cual puede ser pálido o rubí, o púrpura. Se produce con uvas rojas o azulosas.',
      link: "/tintos"
    },
    {
      image: blancoImage,
      title: 'BLANCO',
      description: 'Con una tonalidad amarilla, dorada, pálida o verdosa. Se hace con uvas blancas o con el jugo (no la cáscara) de las rojas.',
      link: "/blancos"
    },
    {
      image: roseImage,
      title: 'ROSE',
      description: 'Tiene un color entre el rosa claro y el fuerte cercano al violeta, se elabora con uvas tintas, pero se les quita la piel.',
      link: '/rose'
    },
  ];

  return (
    <>
      <Box sx={{  alignItems: 'center', mr: 8 }}>
        <Typography variant="h1" align="center" gutterBottom >
          Tipos de Vinos
        </Typography>
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

export default TiposDeVinos;
