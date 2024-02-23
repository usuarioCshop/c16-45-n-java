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
// import { BASE_URL } from "@/utils/connectApi";
export default function EditForm({ showform, values, submitHandler }) {
  const handlerButton = (errors) => {
    console.log(errors);
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
        initialValues={values}
        validationSchema={Yup.object({
          detalle: Yup.string().required("Coloca el nombre del producto"),
          precio: Yup.number()
            .required("Coloca un precio en formato 0.00")
            .round("floor"),
          categoria: Yup.string().required(
            "Selecciona una opcion o crea una categoria nueva"
          ),
          fechaAlta: Yup.date()
            .default(() => Date.now())
            .required("Elige o coloca una fecha"),
          cantidad: Yup.number()
            .min(1)
            .integer()
            .required("Coloca la cantidad de productos"),
          marca: Yup.string().required(
            "Coloque el nombre de la marca correspondiente"
          ),
          imagenUrl: Yup.string().required(
            "Se require el enlace de la imagen del producto"
          ),
        })}
        onSubmit={(values) => {
          submitHandler(values);
          showform();
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            {console.log(props.initialValues)}
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                placeholder={props.values.detalle}
                focusBorderColor="green.500"
                value={props.getFieldProps("productName").value}
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
                placeholder={props.values.precio}
                onChange={props.handleChange}
                focusBorderColor="green.500"
                value={props.getFieldProps("price").value}
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
                name="category"
                focusBorderColor="green.500"
                placeholder={props.values.categoria}
                value={props.getFieldProps("category").value}
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
                placeholder={props.values.fechaAlta}
                focusBorderColor="green.500"
                onChange={props.handleChange}
                value={props.getFieldProps("date").value}
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
                placeholder={props.values.cantidad}
                onChange={props.handleChange}
                name="quantity"
                focusBorderColor="green.500"
                value={props.getFieldProps("quantity").value}
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
                focusBorderColor="green.500"
                placeholder={props.values.marca}
                onChange={props.handleChange}
                name="brand"
                value={props.getFieldProps("brand").value}
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
                placeholder={props.values.imagenUrl}
                value={props.getFieldProps("image").value}
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
                Modificar
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

EditForm.propTypes = {
  showform: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.func,
  submitHandler: PropTypes.func,
  values: PropTypes.object,
  initialValues: PropTypes.object,
};
