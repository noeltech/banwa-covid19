import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#455a64" },
  },
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader />

          <div className="FlexColumn">
            <div className="FlexContent">
              <AppBody />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
