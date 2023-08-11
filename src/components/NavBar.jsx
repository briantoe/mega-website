import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { title: 'Home', slug: '' },
  { title: 'About Us', slug: 'about' },
  { title: 'Contact Us', slug: 'contact' },
  { title: 'Socials', slug: 'socials' },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Mobile menu button */}
            <IconButton
              size='large'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'>
              <MenuIcon />
            </IconButton>
            {/* Mobile menu content */}
            <Menu
              id='menu-appbar'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {/* Map through pages to create menu items */}
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => navigate(page.slug)}>
                  <Typography textAlign='center'>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Map through pages to create buttons */}
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.slug)}
                sx={{
                  // Apply primary color if it's the current page, otherwise white
                  color:
                    location.pathname === page.slug ? 'primary.main' : 'white',
                  display: 'block',
                }}>
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
