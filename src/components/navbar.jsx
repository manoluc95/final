import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logoImage from '../assets/imagenes/Untitled design.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, backgroundColor: 'white' }}>
          <Box sx={{mr:15}}>
          <NavLink to="/">
            <img src={logoImage} alt="Logo" style={{ height: 50 }}  />
          </NavLink>
          </Box>
          <NavLink to="/TiposDeVinos" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
                
                fontWeight: location.pathname === '/TiposDeVinos' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              Tipos 
            </Button>
          </NavLink>
          <NavLink to="/elaboracion" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
              
                fontWeight: location.pathname === '/elaboracion' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              Elaboracion 
            </Button>
          </NavLink>
          <NavLink to="/AprenderDeVinos" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
              
                fontWeight: location.pathname === '/AprenderDeVinos' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              Aprender 
            </Button>
          </NavLink>
          <NavLink to="/bodegas" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
                
                fontWeight: location.pathname === '/bodegas' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              Bodegas
            </Button>
          </NavLink>
         
          <NavLink to="/vinospararegalar" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
               
                fontWeight: location.pathname === '/vinospararegalar' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
               regalar
            </Button>
          </NavLink>
          <NavLink to="/Enoturismo" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
               
                fontWeight: location.pathname === '/vinospararegalar' ? 'bold' : 'normal',
                mr: 2,
              }}
            >
               Enoturismo
            </Button>
          </NavLink>
          <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                backgroundColor: '#D2B48C', // Marrón claro
               
                fontWeight: location.pathname === '/contacto' ? 'bold' : 'normal',
                mr: 10,
              }}
            >
              Contacto
            </Button>
          </NavLink>
          <NavLink to="/Login">
            <IconButton sx={{ color: '#D2B48C' }}>
              <AccountCircle />
            </IconButton>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;