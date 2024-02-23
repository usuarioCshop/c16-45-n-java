import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

export default function ProductForm({ showform }) {
  const [product, setProduct] = useState({
    detalle: "",
    precio: 0.0,
    categoria: "",
    fecha: "",
    cantidad: 0,
    marca: "",
    imagenUrl: "",
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: 0.0,
      category: "",
      date: Date.now(),
      quantity: 1,
      brand: "",
      image: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Required"),
      price: Yup.number()
        .required("Coloca un precio en formato 0.00")
        .positive()
        .round("floor"),
      category: Yup.string().required(
        "Selecciona una opcion o crea una categoria nueva"
      ),
      date: Yup.date().default(() => Date.now().toLocaleString("es-BO")),
      quantity: Yup.number().min(1).integer().positive(),
      brand: Yup.string().required(
        "Coloque el nombre de la marca correspondiente"
      ),
      image: Yup.string().required(
        "Se require el enlace de la imagen del producto"
      ),
    }),
    onSubmit(values) {
      setProduct(() => {
        return {
          detalle: values.productName,
          precio: values.price,
          categoria: values.category,
          fechaAlta: values.date,
          cantidad: values.quantity,
          marca: values.brand,
          imagenUrl: values.image,
        };
      });
      console.log(product);
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <FormControl variant="floating" isRequired my="5">
          <Input
            type="text"
            placeholder="Ingresa el nombre del producto"
            focusBorderColor="green.500"
            id="productName"
          />
          <FormLabel
            htmlFor="productName"
            fontWeight="bold"
            backgroundColor="white"
            w="80%"
          >
            Nombre Producto
          </FormLabel>
        </FormControl>
        {console.log(yupToFormErrors(formik.errors))}

        <FormControl variant="floating" isRequired my="5">
          <NumberInput errorBorderColor="red.200" focusBorderColor="green.500">
            <NumberInputField id="price" />
          </NumberInput>
          <FormLabel htmlFor="price" fontWeight="bold" backgroundColor="white">
            Precio
          </FormLabel>
        </FormControl>

        <FormControl variant="floating" isRequired my="5">
          <Select
            size="md"
            placeholder="Selecciona una categoria"
            id="category"
            focusBorderColor="green.500"
          >
            <option value="categoria1">Categoria1</option>
            <option value="categoria2">Categoria2</option>
            <option value="categoria3">Categoria3</option>
            <option value="categoria4">Categoria4</option>
          </Select>
          <FormLabel
            htmlFor="category"
            fontWeight="bold"
            backgroundColor="white"
          >
            Categoria
          </FormLabel>
        </FormControl>

        <FormControl variant="floating" isRequired my="5">
          <Input type="date" id="date" focusBorderColor="green.500" />
          <FormLabel htmlFor="date" fontWeight="bold" backgroundColor="white">
            Fecha
          </FormLabel>
        </FormControl>

        <FormControl variant="floating" isRequired my="5">
          <NumberInput
            defaultValue={1}
            errorBorderColor="red.200"
            focusBorderColor="green.500"
          >
            <NumberInputField id="quantity" /> cantidad
          </NumberInput>
          <FormLabel
            htmlFor="quantity"
            fontWeight="bold"
            backgroundColor="white"
          >
            Cantidad
          </FormLabel>
        </FormControl>

        <FormControl variant="floating" isRequired my="5">
          <Input
            type="text"
            placeholder="Ingresa la marca del producto"
            focusBorderColor="green.500"
            id="brand"
          />
          <FormLabel
            htmlFor="brand"
            fontWeight="bold"
            backgroundColor="white"
            w="80%"
          >
            Marca
          </FormLabel>
        </FormControl>
        <FormControl variant="floating" isRequired my="5">
          <Input
            type="text"
            focusBorderColor="green.500"
            id="productImage"
            placeholder="URL: http://example.com/imagen.png"
          />
          <FormLabel
            htmlFor="productImage"
            fontWeight="bold"
            backgroundColor="white"
            w="80%"
          >
            Imagen Producto
          </FormLabel>
        </FormControl>
        <Button colorScheme="teal" type="submit" isDisabled={true}>
          Confirmar
        </Button>
        <Button colorScheme="red" type="submit" onClick={showform}>
          Cancelar
        </Button>
      </form>
    </Box>
  );
}

ProductForm.propTypes = {
  showform: PropTypes.func,
};
