import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from "react-router-dom";

{/* On créer le nom de nos catégories, et vers quel lien elle envoie l'utilisateur */}

const pages = [ {name:'Home', link: "/"}, 
                {name:'Docs', link:"/Docs"}, 
                {name:'Quiz', link: "/Quiz"}, 
                {name:'LeaderBoard', link:"/LeaderBoard"}];

function Navbar() {

  {/* Outil de navigation entre les pages */}

  let navigate = useNavigate();

  {/* Création des paramètres de notre menu */}

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorElNav(null);
  }; 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{backgroundColor: '#F69E7B'}} sx={{ borderRadius: "11px" }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        {/* Responsive design */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Mapage pour afficher toutes les catégories */}
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => redirectRoute(page.link)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LearNSI
          </Typography>

        {/* Laptop design */}

          {/* Logo */}

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> {/* Add icon */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LearNSI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => redirectRoute(page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;