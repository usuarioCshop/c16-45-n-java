import React, { useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";
import axios from "axios";

export const LoginProvider = ({ children }) => {
 
  const [valido, setValido] = useState(false);

  const actualizarLogin=(value) => {
    setValido(value)
  }   

return (
    <LoginContext.Provider value={{ actualizarLogin, valido }}>
      {children}
    </LoginContext.Provider>
  );
};
