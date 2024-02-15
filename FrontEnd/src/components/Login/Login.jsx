import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
// import { prueba } from "../Prueba/Prueba";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {actualizarLogin } = useContext(LoginContext);

  const [ver, setVer] = useState("password");
  function verClave(event) {
    event.preventDefault();
    ver == "password" ? setVer("text") : setVer("password");
  }

  async function enviarDatosAlaApi(values) {
    try {
      const response = await fetch("http://localhost:8080/usuario/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Procesar la respuesta exitosa, por ejemplo, redireccionar o actualizar el estado de autenticación
        const data = await response.json();
        if (data) {
          actualizarLogin(true);
          navigate("/prueba");
        } else {
          setError("Credenciales invalidas");
          
        }
      } else {
        // Procesar errores de la API
        const data = await response.json();
        setError(data.message); // Ajusta esto según la estructura de respuesta de tu API
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError("Error al conectarse al servidor");
    }
  }

  return (
    <Flex justifyContent={"center"} m="20px">
      <Box
        bgColor={"gray.300"}
        p="30px"
        borderRadius={"10px"}
        boxShadow={"2px 2px 1px #999"}
      >
        <Box>
          {error != "" && (
            <Text
              as="h2"
              color="red"
              fontWeight={"bold"}
              bgColor={"#f9bfab"}
              p="10px"
              m="10px"
              borderRadius={"10px"}
            >
              {error}
            </Text>
          )}
        </Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            enviarDatosAlaApi(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email" fontWeight="bold">
                      Email
                    </FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="email"
                      focusBorderColor="rgba(0,0,0,0.04)"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password" fontWeight="bold">
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        {...field}
                        id="password"
                        type={ver}
                        placeholder="password"
                        focusBorderColor="rgba(0,0,0,0.04)"
                      />
                      <InputRightElement>
                        {ver == "password" && (
                          <ViewIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                        {ver == "text" && (
                          <ViewOffIcon
                            w="60px"
                            boxSize="20px"
                            mr="2px"
                            color="grey"
                            onClick={verClave}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                disabled={isSubmitting}
                colorScheme="#363636"
                variant="outline"
                m="10px"
              >
                Verificar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
