import React from "react";
import DarkThemeProvider from "./provider/DarkThemeProvider";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <DarkThemeProvider>
      <NavBar></NavBar>
      <Header></Header>
      <AboutPage></AboutPage>
    </DarkThemeProvider>
  );
};

export default App;
