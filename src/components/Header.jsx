import React from 'react';
import { AppBar, Toolbar, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// import logo from './logo.png'; // Import your logo image

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   logo: {
//     width: 40, // Adjust the width as needed
//     height: 40, // Adjust the height as needed
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const HeaderContent = styled('div')({
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',
  //   alignContent: "center"
  // paddingTop: "3px",
});

const Media = styled(CardMedia)({
  width: 100,
  height: 100,
  objectFit: 'cover',
  //   marginRight: (theme) => theme.spacing(2),
  margin: '20px', // Adjust as needed
});

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <HeaderContent>
          <Media
            component='img'
            src='https://megaensemble.carrd.co/assets/images/image01.jpg'
            alt='MEGA Ensemble logo'
          />
          <Typography variant='h2' style={{ color: '#FF7575' }}>
            MEGA Ensemble
          </Typography>
        </HeaderContent>
      </Toolbar>
    </AppBar>
  );
};
