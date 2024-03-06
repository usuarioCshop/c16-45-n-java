import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./components/Login/Login.jsx";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Principal } from "./components/products/Principal.jsx";
// import { LoginContext } from "./components/context/LoginContext.jsx";

function App() {
  // TODO LO COMENTADO ES PARA UTILIZAR EN UN IF QUE NO PERMITA SEGUIR SI NO ESTAS LOGUEADO
  // PARA ESO CREO QUE SE USA useLocation o useNAvigate y se lo pone asi: {location.pathName === "/productos" <Route path='*' element={<Error/>}/>}(algo asi XD es la idea)
  // const { actualizarLogin } = useContext(LoginContext);
  // console.log(actualizarLogin);

  return (
    <BrowserRouter>
      <Container
        display="flex"
        alignContent="center"
        justifyContent="center"
        minH="100vh"
        minW="100vw"
      >
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/productos" element={<Principal />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
