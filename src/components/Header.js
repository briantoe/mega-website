import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import NavBar from "./NavBar";

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

const HeaderContent = styled("div")({
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center",
  //   alignContent: "center"
  // paddingTop: "3px",
});

const Media = styled(CardMedia)({
  width: 100,
  height: 100,
  objectFit: "cover",
  //   marginRight: (theme) => theme.spacing(2),
  margin: "20px", // Adjust as needed
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderContent>
          <Media
            component="img"
            src="https://megaensemble.carrd.co/assets/images/image01.jpg"
            alt="MEGA Ensemble logo"
          />
          <Typography variant="h2" style={{ color: "#FF7575" }}>
            MEGA Ensemble
          </Typography>
        </HeaderContent>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
