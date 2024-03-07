import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login.jsx";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Principal } from "./components/products/Principal.jsx";
import { LoginContext } from "./components/context/LoginContext.jsx";

function App() {
  // TODO LO COMENTADO ES PARA UTILIZAR EN UN IF QUE NO PERMITA SEGUIR SI NO ESTAS LOGUEADO
  // PARA ESO CREO QUE SE USA useLocation o useNAvigate y se lo pone asi: {location.pathName === "/productos" <Route path='*' element={<Error/>}/>}(algo asi XD es la idea)
  const { valido } = useContext(LoginContext);
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
          {!valido && <Route exact path="/" element={<Login />}></Route>}
          {valido && (
            <Route exact path="/productos" element={<Principal />}></Route>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
