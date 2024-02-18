import { BrowserRouter, Route,  Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Login } from "./components/Login/Login";
import { Container, ColorModeProvider, Heading } from "@chakra-ui/react";

import ProductsTable from "@/components/products/ProductsTable";
import Navbar from "@/components/navbar/Navbar";
import ModalWindow from "./components/ui/ModalWindow";

import viteLogo from "/vite.svg";
// import {FrmLogin} from './components/Login/FrmLogin.jsx'
import { Container } from "@chakra-ui/react";
// import { Login } from './components/Login/Login.jsx'

function App() {
  return (
    <ColorModeProvider>
    <BrowserRouter>
    <Container maxW="{[90%, sm, md]}" bgColor="white">
        <Navbar bgGradient="linear-gradient(180deg, #201F4F 0%, #363583 100%)" />
        <Heading
          as="h2"
          size="3xl"
          colorScheme="purple63"
          m={"5"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/productos" element={<ProductsTable />}></Route>
            
          </Routes>
         <ModalWindow />
        </Heading>
      </Container>
    </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;
