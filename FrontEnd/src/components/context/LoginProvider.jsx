import React, { useEffect, useState } from 'react'
import {LoginContext} from './LoginContext'
import axios from 'axios';

export const LoginProvider = ({children}) => {
  const [user,setUser]=useState([]);

  const baseUrl="http://localhost:8080/usuario"
    const fetchData = ()=>{
      return axios.get(baseUrl).then((response)=>setUser(response.data))
    }
    useEffect(()=>{
      fetchData();
    },
    [])
    const initValues={
        user: 'Omar Dario',
        email:'omar.virili@gmail.com',
        pass:'1234',
        validado:false
    }
    const [login,setLogin]=useState(initValues)
    const [valido,setValido]=useState(false)
    const actualizarLogin=(value)=>{
      console.log(user);
      if (user == 'correctdo'){
        setValido(value)
      }
    }
  return (
    <LoginContext.Provider value={{login,actualizarLogin,valido}}>
        {children}
    </LoginContext.Provider>
  )
}
