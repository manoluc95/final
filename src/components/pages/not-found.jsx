import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" color="error">
        404 - Página no encontrada
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleGoHome}>
        Volver al inicio
      </Button>
    </Box>
  );
}

export default NotFound;