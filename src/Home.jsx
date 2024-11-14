


//import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from './components/card'
import presentationImage from './assets/imagenes/bg-presentation.jpg';

function home() {
    return (
        <>

        
            <Box
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${presentationImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <Typography
                            variant="h1"
                            color="black"
                            mt={-6}
                            mb={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            ¿Que quieres aprender hoy?
                        </Typography>
                        <Typography
                            variant="h3"
                            color="black"
                            textAlign="center"
                            px={{ xl: 10, lg: 20 }}
                            mt={1}
                        >
                            Bienvenido a tu plataforma de aprendizaje .
                        </Typography>
                    </Grid>

                </Container>
            </Box>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            />
        </>
    )
}
export default home