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

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/productos/ProductContext";

export default function EditForm({ values, onClose }) {
  const { categories, listCategories, editProducts } =
    useContext(ProductContext);
  listCategories();

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
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
    }),

    onSubmit(values) {
      setTimeout(() => {
        editProducts(values);
        onClose();
      }, 2000);
    },
  });

  const handlerButton = (errors) => {
    return Object.keys(errors).length !== 0;
  };

  const handlerFields = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
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
      <Formik enableReinitialize>
        {({ isSubmitting, errors }) => (
          <Form onSubmit={formik.handleSubmit}>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="text"
                focusBorderColor="green.500"
                id="detalle"
                onChange={(e) => handlerFields("detalle", e.target.value)}
                value={formik.values.detalle}
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
                focusBorderColor="green.500"
                id="precio"
                onChange={(e) => handlerFields("precio", e.target.value)}
                value={formik.values.precio}
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
                as={Input}
                id="codigo"
                type="text"
                focusBorderColor="green.500"
                onChange={(e) => handlerFields("codigo", e.target.value)}
                value={formik.values.codigo}
              ></Field>
              <FormLabel
                htmlFor="code"
                fontWeight="bold"
                backgroundColor="white"
                w="50%"
              >
                Codigo
              </FormLabel>
              <ErrorMessage name="code" component="div" color="red" />
            </FormControl>
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Select}
                name="category"
                focusBorderColor="green.500"
                value={formik.values.categoria}
              >
                {categories?.map((category) => {
                  return (
                    <option value={category.nombre} key={category.nombre}>
                      {category.nombre}
                    </option>
                  );
                })}
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
            <FormControl variant="floating" isRequired my="5">
              <Field
                as={Input}
                type="date"
                name="date"
                focusBorderColor="green.500"
                value={formik.values.fechaAlta}
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
                name="quantity"
                focusBorderColor="green.500"
                id="cantidad"
                onChange={(e) => handlerFields("cantidad", e.target.value)}
                value={formik.values.cantidad}
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
                name="brand"
                value={formik.values.marca}
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
                id="imagenUrl"
                onChange={(e) => handlerFields("imagenUrl", e.target.value)}
                value={formik.values.imagenUrl}
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
                onClick={handlerButton}
                isDisabled={handlerButton(errors)}
                isLoading={isSubmitting}
              >
                Modificar
              </Button>
              <Button colorScheme="red" type="submit" onClick={onClose}>
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
  onClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.func,
  values: PropTypes.object,
  getFieldProps: PropTypes.func,
  getFieldMeta: PropTypes.func,
  isSubmitting: PropTypes.func,
};
