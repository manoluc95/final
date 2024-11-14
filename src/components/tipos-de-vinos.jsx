import React from 'react';
import {Box, Typography, Container, Button} from '@mui/material';

function TiposDeVinos() {
  return (
    <Container>
      <Box sx={{ my: 4, p: 3, backgroundColor: '#D2B48C', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#8B0000' }}>
          Tipos de Vinos

        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino es una bebida alcohólica obtenida de la fermentación del jugo de uvas. Existen diferentes tipos de vinos, cada uno con características únicas que dependen de la variedad de uva, el proceso de elaboración y la región de origen. A continuación, se describen algunos de los tipos de vinos más comunes:

        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#8B0000' }}>

          Vino Tinto

        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino tinto se elabora a partir de uvas tintas y su color varía desde el rojo intenso hasta el púrpura oscuro. Los vinos tintos suelen tener sabores a frutas oscuras como cerezas, moras y ciruelas, y pueden tener notas de especias, chocolate y tabaco. Algunos de los vinos tintos más conocidos son el Cabernet Sauvignon, Merlot, Pinot Noir y Malbec.s


          <Button type="submit" variant="contained" color="#8B4513" sx={{ px: 4, py: 1.5 }}>
          Aprender más
        </Button>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#8B0000' }}>
          Vino Blanco
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino blanco se produce a partir de uvas blancas o tintas con pulpa clara. Su color varía desde el amarillo pálido hasta el dorado. Los vinos blancos suelen tener sabores a frutas cítricas, manzanas, peras y melocotones, y pueden tener notas florales y minerales. Algunos de los vinos blancos más populares son el Chardonnay, Sauvignon Blanc y Riesling.

          <Button type="submit" variant="contained" color="#8B4513" sx={{ px: 4, py: 1.5 }}>
            Aprender más
          </Button>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#8B0000' }}>
          Vino Rosado
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino rosado se elabora a partir de uvas tintas, pero con un tiempo de maceración más corto que el vino tinto, lo que le da su característico color rosado. Los vinos rosados suelen tener sabores a frutas rojas como fresas, frambuesas y sandía, y pueden tener notas florales y cítricas. Algunos de los vinos rosados más conocidos son el Rosé de Provence y el White Zinfandel.

          <Button type="submit" variant="contained" color="#8B4513" sx={{ px: 4, py: 1.5 }}>
            Aprender más
          </Button>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#8B0000' }}>
          Vino Espumoso
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino espumoso se caracteriza por tener burbujas de dióxido de carbono, que se producen durante la fermentación. Los vinos espumosos pueden ser blancos, rosados o tintos, y varían en dulzura desde brut (seco) hasta dulce. Algunos de los vinos espumosos más famosos son el Champagne, Prosecco y Cava.

          <Button type="submit" variant="contained" color="#8B4513" sx={{ px: 4, py: 1.5 }}>
            Aprender más
          </Button>
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#8B0000' }}>
          Vino de Postre
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          El vino de postre es un vino dulce que se sirve generalmente con el postre. Se elabora a partir de uvas con alto contenido de azúcar y puede ser blanco, rosado o tinto. Los vinos de postre suelen tener sabores a frutas maduras, miel y caramelo. Algunos de los vinos de postre más conocidos son el Sauternes, Porto y Moscato.
          <Button type="submit" variant="contained" color="#8B4513" sx={{ px: 4, py: 1.5 }}>
            Aprender más
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default TiposDeVinos;
