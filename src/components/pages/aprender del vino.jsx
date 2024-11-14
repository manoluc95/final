//import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
import Box from "@components/MKBox";
//import MKInput from "@components/MKInput";
import Button from "@components/MKButton";
import Typography from "@components/MKTypography";
import Grid from "@mui/material";

import { Grid2 } from '@mui/material';





function AprenderSobreVino() {
    return (
        <>
            <Grid item xs={12} lg={6}>
                <Box>
                    display={{ xs: "none", lg: "flex" }}
                    width=  calc(100% - 2rem)
                    height= calc(100vh - 2rem)
                    borderRadius= lg
                    ml={2}
                    mt={2}
                    sx={{ backgroundImage: `url('/uvapp/src/assets/imagenes/bgImage.png')`, }}
                </Box>
            </Grid>

            <Typography variant="h3" color="white">
                Aprende Sobre Vinos: Una Experiencia para los Sentidos
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

            <Grid2 container spacing={2}>
                <Grid2 container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <Button type="submit" variant="gradient" color="info">
                        aprender mas
                    </Button>
                </Grid2>
            </Grid2>
        
        </>
    )
}

export default AprenderSobreVino;
