import { useState, useEffect } from "react";
import validate from "@/utils/validation";
import {
  Button,
  Box,
  Input,
  VStack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
// import axios from "axios";

export default function ProductForm() {
  const [product, setProduct] = useState({
    detalle: "",
    precio: 0.0,
    categoria: "",
    fecha: "",
    cantidad: 0,
    marca: "",
    imagen: "",
  });

  const [enable, setEnable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios
    //   .post("http://localhost:8080/api/formulario", product)
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error.message));
    const validateProduct = validate(product);
    console.log(validateProduct);
    setError(validateProduct);
    if (!error) {
      setEnable(true);
    }
  }, [product, error, enable]);

  const getProductDetails = (e) => {
    switch (e.target.name) {
      case "productName":
        return setProduct((prevProd) => {
          return { ...prevProd, detalle: e.target.value };
        });
      case "category":
        return setProduct((prevProd) => {
          return { ...prevProd, categoria: e.target.value };
        });
      case "date":
        return setProduct((prevProd) => {
          return {
            ...prevProd,
            fecha: e.target.value,
          };
        });
      case "brand":
        return setProduct((prevProd) => {
          return { ...prevProd, marca: e.target.value };
        });
      case "productImage":
        return setProduct((prevProd) => {
          return { ...prevProd, imagen: e.target.value };
        });
      default:
        return product;
    }
  };

  const toSaveProduct = () => {
    console.log(product);
  };

  const toCancellProduct = (e) => {
    console.log(e.target);
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={2}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="2xl"
    >
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Nombre Producto</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            variant="filled"
            errorBorderColor="red.200"
            focusBorderColor="green.500"
            name="productName"
            onChange={getProductDetails}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Precio</FormLabel>
          <NumberInput
            onChange={(value) =>
              setProduct((prev) => {
                return { ...prev, precio: parseFloat(value) };
              })
            }
          >
            <NumberInputField
              name="price"
              errorBorderColor="red.200"
              focusBorderColor="green.500"
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <Select
            variant="filled"
            size="md"
            placeholder="Selecciona una categoria"
            name="category"
            onChange={getProductDetails}
          >
            <option value="categoria1">Categoria1</option>
            <option value="categoria2">Categoria2</option>
            <option value="categoria3">Categoria3</option>
            <option value="categoria4">Categoria4</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Fecha</FormLabel>
          <Input type="date" onChange={getProductDetails} name="date" />
        </FormControl>

        <FormControl>
          <FormLabel>Cantidad</FormLabel>
          <NumberInput
            defaultValue={1}
            onChange={(value) =>
              setProduct((prev) => {
                return { ...prev, cantidad: parseInt(value) };
              })
            }
          >
            <NumberInputField
              errorBorderColor="red.200"
              focusBorderColor="green.500"
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Marca</FormLabel>
          <Input
            type="text"
            placeholder="Coloca la imagen de tu producto"
            onChange={getProductDetails}
            errorBorderColor="red.200"
            focusBorderColor="green.500"
            name="brand"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Imagen</FormLabel>
          <Input
            type="text"
            placeholder="Coloca la url de la imagen"
            onChange={getProductDetails}
            errorBorderColor="red.200"
            focusBorderColor="green.500"
            name="productImage"
          />
        </FormControl>
        {enable && (
          <Button
            colorScheme="teal"
            type="submit"
            onClick={toSaveProduct}
            isDisabled={enable}
          >
            Confirmar
          </Button>
        )}
        <Button colorScheme="red" type="submit" onClick={toCancellProduct}>
          Cancelar
        </Button>
      </VStack>
    </Box>
  );
}
