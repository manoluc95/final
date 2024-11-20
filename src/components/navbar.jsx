import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton,  } from '@mui/material';
import {  AccountCircle } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../assets/imagenes/Untitled design.png';
import Button from '@mui/material/Button';
import TiposDeVinos from './TiposDeVinos';
import AprenderDeVinoS from "./pages/AprenderDeVinos.jsx";

function Navbar() {
  const location = useLocation();



  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 8 }}>
          <NavLink to="/">
            <img src={logoImage} alt="Logo" style={{ height: 80 }} />
          </NavLink>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <NavLink to="/TiposDeVinos" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"

            sx={{
              backgroundColor: '#D2B48C', // Marrón claro
              borderRadius: '50px', // Ovalado
              fontWeight: location.pathname === '/TiposDeVinos' ? 'bold' : 'normal',
              mr: 5,

            }}
          >
            Tipos de Vinos
          </Button>
        </NavLink>
        <NavLink to="/elaboracion" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"

            sx={{
              backgroundColor: '#D2B48C', // Marrón claro
              borderRadius: '50px', // Ovalado
              fontWeight: location.pathname === '/contacto' ? 'bold' : 'normal',
              mr: 5,
            }}
          >
            Elaboracion de Vinos
          </Button>
        </NavLink>
        <NavLink to="/AprenderDeVinos" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"

            sx={{
              backgroundColor: '#D2B48C', // Marrón claro
              borderRadius: '50px', // Ovalado
              fontWeight: location.pathname === '/AprenderDeVinos' ? 'bold' : 'normal',
              mr: 5,

            }}
          >
            Aprender de Vinos
          </Button>
        </NavLink>
        <NavLink to="/bodegas" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"

            sx={{
              backgroundColor: '#D2B48C', // Marrón claro
              borderRadius: '50px', // Ovalado
              fontWeight: location.pathname === '/bodegas' ? 'bold' : 'normal',
              mr: 5,

            }}
          >
            Bodegas
          </Button>
        </NavLink>
          <NavLink to="/bodegas" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"

              sx={{
                backgroundColor: '#D2B48C', // Marrón claro
                borderRadius: '50px', // Ovalado
                fontWeight: location.pathname === '/bodegas' ? 'bold' : 'normal',
                mr: 5,

              }}
            >
              Curiosidades
            </Button>
          </NavLink>
          <NavLink to="/bodegas" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"

              sx={{
                backgroundColor: '#D2B48C', // Marrón claro
                borderRadius: '50px', // Ovalado
                fontWeight: location.pathname === '/bodegas' ? 'bold' : 'normal',
                mr: 5,

              }}
            >
            Vinos para regalar
            </Button>
          </NavLink>

        <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"

            sx={{
                backgroundColor: '#D2B48C', // Marrón claro
                borderRadius: '50px', // Ovalado
                fontWeight: location.pathname === '/contacto' ? 'bold' : 'normal',mr: 5,
            }}
          >
            Contacto
          </Button>
        </NavLink>
        </Box>
        <NavLink to="/Login">
          <IconButton color="#D2B48C">
            <AccountCircle />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;