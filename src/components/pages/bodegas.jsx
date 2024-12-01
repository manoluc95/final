
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import bodegaImage from '../../assets/imagenes/bodegas/lopez/portada.jpeg';
import bodegaImage1 from '../../assets/imagenes/bodegas/los toneles.jpeg';
import bodegaImage2 from '../../assets/imagenes/bodegas/septima.jpeg';
import bodegaImage3 from '../../assets/imagenes/bodegas/finca.jpeg';
import bodegaImage4 from '../../assets/imagenes/bodegas/chandon.jpeg';
import bodegaImage5 from '../../assets/imagenes/bodegas/la rural.jpeg';
import bodegaImage6 from '../../assets/imagenes/bodegas/norton.jpeg';
import bodegaImage7 from '../../assets/imagenes/bodegas/trapiche.jpeg';
import bodegaImage8 from '../../assets/imagenes/bodegas/vistalba.jpeg';
const bodegas = [
  {
    name: 'Lopez',
    description: 'Bodega familiar fundada en 1898 con restaurante, visitas guiadas gratuitas y catas.',
    image: bodegaImage,
    link: 'https://bodegaslopez.com.ar/'
  },
  {
    name: 'Los Toneles',
    description: 'Visitas guiadas a las bodegas, con degustación de vino y aceite de oliva.',
    image: bodegaImage1,
    link: 'https://linktr.ee/Bodegalostoneles'
  },
  {
    name: ' Séptima',
    description: 'Pasión y respeto por la tierra.',
    image: bodegaImage2,
    link: 'https://www.bodegaseptima.com/'
  }, 
  {
    name: 'Finca Bandinis',
    description: 'Nuestra House of Wines , ofrese una experiencia unica.',
    image: bodegaImage3,
    link: 'https://fincabandini.com.ar/'
  },
  {
    name: 'Chandon',
    description: 'Conoce los secretos del mundo Chandon.',
    image: bodegaImage4,
    link: 'https://www.chandon.com.ar/'
  },
  {
    name: 'La Rural',
    description: 'Dentro del predio de la finca se encuentra el Museo del Vino, en la que fuera casa familiar de don Felipe Rutini.',
    image: bodegaImage5,
    link: 'https://bodegalarural.com.ar'
  },
  {
    name: 'Norton',
    description: 'una historia apasionante.',
    image: bodegaImage6,
    link: 'https://www.norton.com.ar/'
  },
  {
    name: 'Trapiche',
    description: 'Te invitamos a descubrir nuestras bodegas , nuestros vinos y nuestro restaurante..',
    image: bodegaImage7,
    link: 'https://trapiche.com.ar/'
  },
  {
    name: 'Vistalba',
    description: 'Visitas guiadas a las bodegas, con degustación de vino y aceite de oliva.',
    image: bodegaImage8,
    link: 'https://www.bodegavistalba.com/'
  },
];

const Bodegas = () => {
  return (
    <Container sx={{ paddingTop: 8 }}> {/* Ajusta el valor de paddingTop según sea necesario */}
      <Typography variant="h1" align="center" gutterBottom>
        BODEGAS
      </Typography>
      <Grid container spacing={4}>
        {bodegas.map((bodega, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ border: '10px solid #D2B48C', borderRadius: '15px' }}>
              <CardMedia
                component="img"
                height="250"
                image={bodega.image}
                alt={bodega.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bodega.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bodega.description}
                </Typography>
                <Button size="small" color="primary" href={bodega.link}>
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Bodegas;