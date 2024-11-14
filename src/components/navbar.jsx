import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase, MenuItem, Menu } from '@mui/material';
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../assets/imagenes/Untitled design.png';
import Button from '@mui/material/Button';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 8 }}>
          <NavLink to="/">
            <img src={logoImage} alt="Logo" style={{ height: 80 }} />
          </NavLink>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mx: 8, flexGrow: 5, border: '2px solid #000' }}>
          <SearchIcon />
          <InputBase placeholder="Buscar…" inputProps={{ 'aria-label': 'search' }} sx={{ ml: 1, flex: 1 }} />
        </Box>

        <NavLink to="/contacto" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"

            sx={{
                backgroundColor: '#D2B48C', // Marrón claro
                borderRadius: '50px', // Ovalado
                fontWeight: location.pathname === '/contacto' ? 'bold' : 'normal',
            }}
          >
            Contacto
          </Button>
        </NavLink>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography onClick={handleMenu} sx={{ cursor: 'pointer', mr: 2 }} aria-controls="category-menu" aria-haspopup="true">
            Categorías
          </Typography>
          <Menu id="category-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {[
              { name: 'Tipos de Vino', path: '/TiposDeVinos' },
              { name: 'Elaboración', path: '/elaboracion' },
              { name: 'Aprender de Vinos', path: '/aprende-sobre-vino' },
              { name: 'Enoturismo', path: '/enoturismo' },
              { name: 'Curiosidades', path: '/curiosidades' },
              { name: 'Vinos para Regalar', path: '/vinos-para-regalar' }
            ].map((category) => (
              <MenuItem key={category.name} onClick={handleClose}>
                <NavLink to={category.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {category.name}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <NavLink to="/Login">
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;