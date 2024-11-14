import { Box, Button, Typography } from '@mui/material';
import bgImage from "../../assets/imagenes/bgImage.png";

function AprenderSobreVino() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        p: 3
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Aprende Sobre Vinos: Una Experiencia para los Sentidos
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Explorar el mundo del vino es mucho más que una cuestión de sabores; es un viaje por la historia, la cultura y el arte que transforma cada copa en una experiencia única.
        Aprender sobre vinos significa entender los procesos de elaboración, reconocer las diferencias entre tipos de uvas y cepas,
        y descubrir los matices que una región o clima específico aportan a cada botella.
        Es adentrarse en un universo de aromas, texturas y sabores que han cautivado a la humanidad durante siglos.
        Conocer el lenguaje del vino nos permite interpretar sus secretos: desde el origen de cada variedad hasta el método de vinificación que define sus características.
        ¿Por qué un Malbec argentino es tan particular? ¿Qué hace que un Pinot Noir francés sea tan elegante? Aprender sobre vinos nos brinda la posibilidad de descifrar
        estas preguntas, y también nos enseña a apreciar la dedicación y la pasión que hay detrás de cada bodega.
        Más allá de mejorar nuestras habilidades de cata, el conocimiento del vino nos invita a apreciar momentos y experiencias. Entender la armonía entre vinos y comidas,
        elegir la copa adecuada y aprender sobre técnicas de conservación son conocimientos que enriquecerán nuestra vida social y nuestra e.
        Sumérgete en el arte de aprender sobre vinos, una aventura donde cada sorbo es una historia, cada botella una obra de arte, y cada cata una oportunidad.
      </Typography>
      <Button type="submit" variant="contained" color="white" sx={{ px: 4, py: 1.5 }}>
        Aprender más
      </Button>
    </Box>
  );
}

export default AprenderSobreVino;