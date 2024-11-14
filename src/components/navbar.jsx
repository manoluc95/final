import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logoImage from '../assets/imagenes/Untitled design.png';


import { Search as SearchIcon, AccountCircle } from '@mui/icons-material';
//import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 8, }}>
  <img
    src={logoImage}
    alt="Logo"
    style={{ height:50 }}
    
  />
</Box>


        {/* Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', mx: 8, flexGrow: 5, border: '2px solid #000',   }}>
          <SearchIcon />
          <InputBase
            placeholder="Buscar…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1, flex: 1 , }}
            
          />
        </Box> 

        {/* Categories with Dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            onClick={handleMenu}
            sx={{ cursor: 'pointer', mr: 2 }}
            aria-controls="category-menu"
            aria-haspopup="true"
          >
            Categorías
          </Typography>
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Tipos de Vino</MenuItem>
            <MenuItem onClick={handleClose}>Elaboración</MenuItem>
            <MenuItem onClick={handleClose}>Aprender de Vinos</MenuItem>
            <MenuItem onClick={handleClose}>Enoturismo</MenuItem>
            <MenuItem onClick={handleClose}>Curiosidades</MenuItem>
            <MenuItem onClick={handleClose}>Vinos para Regalar</MenuItem>
          </Menu>
        </Box>

        {/* Login Icon */}
        <IconButton color="inherit">
          <AccountCircle />
          <link rel="stylesheet" href="/uvapp/src/login.jsx" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
