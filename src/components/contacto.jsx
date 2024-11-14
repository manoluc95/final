import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
//import Box from '@mui/material/Box';



import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Contacto() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <Box component="section" py={12}>
      <Container>
        <Grid2 container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <Typography variant="h3" mb={1}>
            Contactanos
          </Typography>
        </Grid2>
        <Grid2 container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <Box width="100%" component="form" method="post" autoComplete="off">
            <Box p={3}>
              <Grid2 container spacing={3}>
                <Grid2 item xs={12} md={6}>
                  <Input variant="standard" label="Nombre" fullWidth />
                </Grid2>
                <Grid2 item xs={12} md={6}>
                  <Input variant="standard" label="Apellido" fullWidth />
                </Grid2>
                <Grid2 item xs={12}>
                  <Input variant="standard" type="email" label="Email " fullWidth />
                </Grid2>
                <Grid2 item xs={12}>
                  <Input variant="standard" label="su mensaje" multiline fullWidth rows={6} />
                </Grid2>
                <Grid2 item xs={12} alignItems="center" ml={-1}>
                  <Switch checked={checked} onChange={handleChecked} />
                  <Typography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    onClick={handleChecked}
                  >
                    &nbsp;&nbsp;Acepto los &nbsp;
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    terminos y condiciones
                  </Typography>
                </Grid2>
              </Grid2>
              <Grid2 container item justifyContent="center" xs={12} my={2}>
                <Button type="submit" variant="gradient" color="dark" fullWidth>
                   Enviar mensaje
                </Button>
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Contacto;