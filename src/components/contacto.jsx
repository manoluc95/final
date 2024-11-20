import { useState } from "react";
import { Container, Switch, Box, Button, Typography, TextField } from "@mui/material";

function Contacto() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <Box component="section" py={12} sx={{ backgroundColor: '#f5f5f5' }}>
      <Container>
        <Box display="flex" justifyContent="center" mx="auto" textAlign="center" width={{ xs: '100%', lg: '58.33%' }}>
          <Typography variant="h3" mb={1} sx={{ color: '#333' }}>
            Contactanos
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mx="auto" width={{ xs: '100%', lg: '58.33%' }}>
          <Box width="100%" component="form" method="post" autoComplete="off" sx={{ backgroundColor: '#fff', p: 3, borderRadius: 15, boxShadow: 3 }}>
            <Box display="flex" flexWrap="wrap" gap={3}>
              <Box flexBasis={{ xs: '100%', md: '48%' }}>
                <TextField variant="standard" label="Nombre" fullWidth sx={{ mb: 2 }} />
              </Box>
              <Box flexBasis={{ xs: '100%', md: '48%' }}>
                <TextField variant="standard" label="Apellido" fullWidth sx={{ mb: 2 }} />
              </Box>
              <Box flexBasis="100%">
                <TextField variant="standard" type="email" label="Email" fullWidth sx={{ mb: 2 }} />
              </Box>
              <Box flexBasis="100%">
                <TextField variant="standard" label="Su mensaje" multiline fullWidth rows={6} sx={{ mb: 2 }} />
              </Box>
              <Box display="flex" alignItems="center" ml={-1} flexBasis="100%">
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
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" my={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#D29719FF', color: '#C45A20FF', '&:hover': { backgroundColor: '#D29719FF' } }}>
                Enviar mensaje
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Contacto;