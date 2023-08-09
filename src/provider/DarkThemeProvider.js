// src/theme.js
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF7575",
    },
    secondary: {
      main: "#FFFFFF",
    },
    // text: { primary:  },
  },
});

// Wrap your components with ThemeProvider to apply the dark theme
const DarkThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
