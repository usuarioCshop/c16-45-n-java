import { useEffect, useState } from "react";
import {
  Button,
  Box,
  Input,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import axios from "axios";

export default function ProductForm() {
  const [product, setProduct] = useState({
    detalle: "",
    precio: 0.0,
    fecha: "",
    cantidad: 1,
    marca: "",
    proveedor: "",
    imagen: "",
  });

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/formulario", product)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }, [product]);

  const saveProduct = (e) => {
    console.log(e.target);
    console.log(setProduct);
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
      bgColor={"purple63"}
    >
      <Heading mb={6}>Product Form</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Nombre Producto</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            variant="filled"
            errorBorderColor="red.200"
            focusBorderColor="green.500"
            onChange={saveProduct}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Precio</FormLabel>
          <NumberInput defaultValue={0.0} onChange={saveProduct}>
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Fecha</FormLabel>
          <Input type="date" defaultValue={Date.now()} onChange={saveProduct} />
        </FormControl>

        <FormControl>
          <FormLabel>Cantidad</FormLabel>
          <NumberInput defaultValue={1} onChange={saveProduct}>
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Marca</FormLabel>
          <Input
            type="text"
            placeholder="Coloca la marca del producto"
            onChange={saveProduct}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" onClick={saveProduct}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}
