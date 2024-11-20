import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ImgMediaCard from "./ImgMediaCard.jsx";

function TiposDeVinos() {
  const cards = [
    {
      image: '',
      title: 'TINTO',
      description: 'De color rojo, el cual puede ser pálido o rubí, o púrpura. Se produce con uvas rojas o azulosas.',
      link: '/tipos-de-vinos'
    },
    {
      image: '',
      title: 'BLANCO',
      description: 'con una tonalidad amarilla, dorada, pálida o verdosa. Se hace con uvas blancas o con el jugo (no la cáscara) de las rojas.',
      link: '/link2'
    },
    {
      image: '',
      title: 'ROSE',
      description: 'tiene un color entre el rosa claro y el fuerte cercano al violeta, se elabora con uvas tintas, pero se les quita la piel .',
      link: '/link2'
    },

  ];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 8 }}>
        <Typography variant="h2" mb={1}>
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
