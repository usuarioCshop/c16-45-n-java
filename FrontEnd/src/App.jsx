import { BrowserRouter, Route,  Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Login } from "./components/Login/Login";
import ProductsTable from "@/components/products/ProductsTable";
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
        justifyContent="center"
        minH="100vh"
        bgColor="purple63"

      >
        
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/productos" element={ <ProductsTable />}></Route>
            
          </Routes>
     
      </Container>
    </BrowserRouter>
  );
}

export default App;
