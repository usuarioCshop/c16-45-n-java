import { useContext } from "react";
import { PropTypes } from "prop-types";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import PopoverModal from "@/components/ui/PopoverModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProductContext } from "@/components/context/productos/ProductContext";
export default function ProductForm({ showform }) {
  let { product, addProducts } = useContext(ProductContext);

  const handlerButton = (errors) => {
    return Object.keys(errors).length !== 0;
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
      <Formik
        initialValues={{
          productName: "",
          price: 0.0,
          category: "",
          date: "",
          quantity: 1,
          brand: "",
          image: "",
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required("Coloca el nombre del producto"),
          price: Yup.number()
            .required("Coloca un precio en formato 0.00")
            .round("floor"),
          category: Yup.string().required(
            "Selecciona una opcion o crea una categoria nueva"
          ),
          date: Yup.date()
            .default(() => Date.now())
            .required("Elige o coloca una fecha"),
          quantity: Yup.number()
            .min(1)
            .integer()
            .required("Coloca la cantidad de productos"),
          brand: Yup.string().required(
            "Coloque el nombre de la marca correspondiente"
          ),
          image: Yup.string().required(
            "Se require el enlace de la imagen del producto"
          ),
        })}
        onSubmit={(values) => {
          product = {
            detalle: values.productName,
            precio: values.price,
            categoria: values.category,
            fechaAlta: values.date,
            cantidad: values.quantity,
            marca: values.brand,
            imagenUrl: values.image,
          };
          setTimeout(() => {
            addProducts(product);
            showform();
          }, 3000);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                placeholder="Ingresa el nombre del producto"
                focusBorderColor="green.500"
                onChange={props.handleChange}
                name="productName"
              />
              <FormLabel
                htmlFor="productName"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Nombre Producto
              </FormLabel>
              <ErrorMessage name="productName" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="number"
                onChange={props.handleChange}
                focusBorderColor="green.500"
                name="price"
              />
              <FormLabel
                htmlFor="price"
                fontWeight="bold"
                backgroundColor="white"
              >
                Precio
              </FormLabel>
              <ErrorMessage name="price" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Select}
                placeholder="Selecciona una categoria"
                name="category"
                focusBorderColor="green.500"
              >
                <option value="categoria1">Categoria1</option>
                <option value="categoria2">Categoria2</option>
                <option value="categoria3">Categoria3</option>
                <option value="categoria4">Categoria4</option>
              </Field>
              <FormLabel
                htmlFor="category"
                fontWeight="bold"
                backgroundColor="white"
              >
                Categoria
              </FormLabel>
              <ErrorMessage name="category" component="div" color="red" />
            </FormControl>
            <PopoverModal showPopover={true} />
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="date"
                name="date"
                focusBorderColor="green.500"
                onChange={props.handleChange}
              />
              <FormLabel
                htmlFor="date"
                fontWeight="bold"
                backgroundColor="white"
              >
                Fecha
              </FormLabel>
              <ErrorMessage name="date" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="number"
                onChange={props.handleChange}
                name="quantity"
                focusBorderColor="green.500"
              />
              <FormLabel
                htmlFor="quantity"
                fontWeight="bold"
                backgroundColor="white"
              >
                Cantidad
              </FormLabel>
              <ErrorMessage name="quantity" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                placeholder="Ingresa la marca del producto"
                focusBorderColor="green.500"
                onChange={props.handleChange}
                name="brand"
              />
              <FormLabel
                htmlFor="brand"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Marca
              </FormLabel>
              <ErrorMessage name="brand" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                focusBorderColor="green.500"
                name="image"
                onChange={props.handleChange}
                placeholder="URL: http://example.com/imagen.png"
              />
              <FormLabel
                htmlFor="image"
                fontWeight="bold"
                backgroundColor="white"
                w="80%"
              >
                Imagen Producto
              </FormLabel>
              <ErrorMessage name="image" component="div" color="red" />
            </FormControl>
            <ButtonGroup>
              <Button
                colorScheme="teal"
                type="submit"
                isDisabled={handlerButton(props.errors)}
              >
                Confirmar
              </Button>
              <Button colorScheme="red" type="submit" onClick={showform}>
                Cancelar
              </Button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

ProductForm.propTypes = {
  showform: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.func,
};
