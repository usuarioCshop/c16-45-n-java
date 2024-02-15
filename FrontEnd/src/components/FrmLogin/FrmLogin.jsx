import React, { useState } from 'react';

const FrmLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de validación de campos si es necesario

    try {
      const response = await fetch("http://localhost:8080/usuario/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
     
      if (response.ok) {
        // Procesar la respuesta exitosa, por ejemplo, redireccionar o actualizar el estado de autenticación
        const data = await response.json();
        if(data){
            console.log('Inicio de sesión exitoso');
        }else{
            console.log("Credenciales Invalidas");
        }
      } else {
        // Procesar errores de la API
        const data = await response.json();
        setError(data.message); // Ajusta esto según la estructura de respuesta de tu API
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setError('Error al conectarse al servidor');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default FrmLogin;
