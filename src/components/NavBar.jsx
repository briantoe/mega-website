import React, { useState } from 'react';
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

const pages = ['Home', 'About Us', 'Contact Us', 'Socials'];

export const NavBar = () => {
  // State to manage mobile menu opening
  const [anchorElNav, setAnchorElNav] = useState(null);
  // State to keep track of the currently active page
  const [currentPage, setCurrentPage] = useState('Home'); // Initialize with the first page

  // Handler for opening the mobile menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Handler for closing the mobile menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Handler for clicking a page button
  const handlePageClick = (page) => {
    // Set the clicked page as the current page and close the menu
    setCurrentPage(page);
    handleCloseNavMenu();
  };

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
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            {/* Mobile menu content */}
            <Menu
              id='menu-appbar'
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
              }}>
              {/* Map through pages to create menu items */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Map through pages to create buttons */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  // Apply primary color if it's the current page, otherwise white
                  color: currentPage === page ? 'primary.main' : 'white',
                  display: 'block',
                }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
