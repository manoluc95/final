import { Box, Typography, Container } from '@mui/material';
import ImgMediaCard from './components/card'
import presentationImage from './assets/imagenes/bg-presentation.jpg';

function home() {
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
            }}
          >
            <Container sx={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", py: 4, borderRadius: 2 }}>
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


        </>
    )
}
export default home