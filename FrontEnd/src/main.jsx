import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  darkBlue: "#201F4F",
  greyBlue: "#363583",
  purple: "#5956FC",
  lightPurple: "#9694FF",
  AlmosWhitePurple: "#D4D3F9",
  purple63: "rgba(32, 31, 79, 0.63)",
  sombra20: "rgba(15,15,19,0.2)",
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
