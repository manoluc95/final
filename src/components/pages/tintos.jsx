import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const tiposDeTintos = [
  {
    title: 'Cabernet Sauvignon',
    description: 'Es uno de los vinos tintos más conocidos y apreciados en el mundo. Se caracteriza por su sabor robusto y sus notas de frutas negras, como grosellas y moras, así como por sus toques de pimienta y especias.',
    image: 'https://example.com/cabernet_sauvignon.jpg'
  },
  {
    title: 'Merlot',
    description: 'Es un vino tinto suave y afrutado, con notas de ciruelas, cerezas y moras. Es conocido por su textura aterciopelada y su sabor menos tánico en comparación con otros vinos tintos.',
    image: 'https://example.com/merlot.jpg'
  },
  {
    title: 'Pinot Noir',
    description: 'Es un vino tinto elegante y delicado, con sabores de cerezas, fresas y frambuesas. Es conocido por su cuerpo ligero a medio y su acidez refrescante.',
    image: 'https://example.com/pinot_noir.jpg'
  },
  {
    title: 'Syrah',
    description: 'Es un vino tinto intenso y especiado, con sabores de frutas negras, como moras y ciruelas, y notas de pimienta negra, chocolate y cuero.',
    image: 'https://example.com/syrah.jpg'
  },
  {
    title: 'Malbec',
    description: 'Es un vino tinto rico y afrutado, con sabores de ciruelas, moras y cerezas negras. Es conocido por sus taninos suaves y su final largo y aterciopelado.',
    image: 'https://example.com/malbec.jpg'
  }
];

function Tintos() {
  return (
    <>
      <Box>
        <Typography variant="h1" align="center" color="primary" mt={5} mb={5}>
          Tintos
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {tiposDeTintos.map((vino, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={vino.image}
                  alt={vino.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {vino.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {vino.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Tintos;