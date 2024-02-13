import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Login } from "./components/Login/Login";
import { Prueba } from "./components/Prueba/Prueba";

import viteLogo from "/vite.svg";
// import {FrmLogin} from './components/Login/FrmLogin.jsx'
import { Container } from "@chakra-ui/react";
// import { Login } from './components/Login/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Container
        display="flex"
        alignContent="center"
        justifySelf="center"
        minH="100vh"
      >
       
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/prueba" element={<Prueba />}></Route>
            
          </Routes>
       
      </Container>
    </BrowserRouter>
  );
}

export default App;
