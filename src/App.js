import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#455a64" },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <AppBody />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
