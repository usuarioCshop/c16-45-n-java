import { useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";
import {
  Checkbox,
  Input,
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  FormControl,
  FormLabel,
  Stack,
  ScaleFade,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useFormik, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/productos/ProductContext";

export default function Filter({ isOpen, onClose }) {
  const [openFormPrice, setOpenFormPrice] = useState(false);
  const [openFormQuantity, setOpenFormQuantity] = useState(false);
  const [openFormCode, setOpenFormCode] = useState(false);
  const [openFormCategories, setOpenFormCategories] = useState(false);
  const { categories, listCategories } = useContext(ProductContext);

  useEffect(() => {
    listCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      codigo: "",
      precio: 0.0,
      cantidad: "",
      categoria: "",
    },
    validationSchema: Yup.object({
      precio: Yup.number()
        .required("Coloca un precio en formato 0.00")
        .round("floor"),
      codigo: Yup.string().required(
        "Ingresa un codigo para el producto formato: 0PRODUCTO01"
      ),
      categoria: Yup.string().required(
        "Selecciona una opcion o crea una categoria nueva"
      ),
      cantidad: Yup.number()
        .min(1)
        .integer()
        .required("Coloca la cantidad de productos"),
    }),

    onSubmit(values) {
      setTimeout(() => {
        filtroSelected(values);
        // onClose();
      }, 2000);
    },
  });

  const toggleFormPrice = (status) => {
    return status.target.checked
      ? setOpenFormPrice(true)
      : setOpenFormPrice(false);
  };

  const toggleFormQuantity = (status) => {
    return status.target.checked
      ? setOpenFormQuantity(true)
      : setOpenFormQuantity(false);
  };

  const toggleFormCode = (status) => {
    return status.target.checked
      ? setOpenFormCode(true)
      : setOpenFormCode(false);
  };

  const toggleFormCategories = (status) => {
    return status.target.checked
      ? setOpenFormCategories(true)
      : setOpenFormCategories(false);
  };

  const filtroSelected = (valores) => {
    console.log(valores);
    onClose();
  };

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit}>
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <Stack>
                <Checkbox onChange={(e) => toggleFormCode(e)}>codigo</Checkbox>
                {openFormCode && (
                  <ScaleFade initialScale={0.9} in={openFormPrice}>
                    <FormControl variant="floating" my="5" size="sm">
                      <Field
                        as={Input}
                        type="text"
                        focusBorderColor="green.500"
                        placeholder="agrega tu categoria"
                        //   onChange={(e) => handlerFields("detalle", e.target.value)}
                        // value={formik.values.detalle}
                      />
                      <FormLabel
                        htmlFor="productImage"
                        fontWeight="bold"
                        backgroundColor="white"
                      >
                        Codigo
                      </FormLabel>
                    </FormControl>
                  </ScaleFade>
                )}

                <Checkbox onChange={(e) => toggleFormPrice(e)}>precio</Checkbox>
                {openFormPrice && (
                  <ScaleFade initialScale={0.9} in={openFormPrice}>
                    <HStack>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Input}
                          type="Number"
                          focusBorderColor="green.500"
                          name="minPrecio"
                          // ref={descriptionCategory}
                        />
                        <FormLabel
                          htmlFor="minPrecio"
                          fontWeight="bold"
                          backgroundColor="white"
                        >
                          Mín.
                        </FormLabel>
                      </FormControl>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Input}
                          type="Number"
                          focusBorderColor="green.500"
                          name="maxPrecio"
                        />
                        <FormLabel
                          htmlFor="maxPrecio"
                          fontWeight="bold"
                          backgroundColor="white"
                        >
                          Máx.
                        </FormLabel>
                      </FormControl>
                    </HStack>
                  </ScaleFade>
                )}

                <Checkbox onChange={(e) => toggleFormQuantity(e)}>
                  cantidad
                </Checkbox>
                {openFormQuantity && (
                  <ScaleFade initialScale={0.9} in={openFormQuantity}>
                    <HStack>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Input}
                          type="Number"
                          focusBorderColor="green.500"
                          name="minCantidad"
                        />
                        <FormLabel
                          htmlFor="minCantidad"
                          fontWeight="bold"
                          backgroundColor="white"
                        >
                          Mín.
                        </FormLabel>
                      </FormControl>
                      <FormControl variant="floating" my="5" size="sm">
                        <Field
                          as={Input}
                          type="Number"
                          focusBorderColor="green.500"
                          name="maxCantidad"
                        />
                        <FormLabel
                          htmlFor="maxCantidad"
                          fontWeight="bold"
                          backgroundColor="white"
                        >
                          Máx.
                        </FormLabel>
                      </FormControl>
                    </HStack>
                  </ScaleFade>
                )}

                <Checkbox
                  nema="categoria"
                  onChange={(e) => toggleFormCategories(e)}
                >
                  categoria
                </Checkbox>
                {openFormCategories && (
                  <ScaleFade initialScale={0.9} in={openFormCategories}>
                    <FormControl variant="floating" my="5" size="sm">
                      <Field
                        as={Select}
                        name="category"
                        focusBorderColor="green.500"
                        placeholder="Selecciona una Categoria"
                        // onChange={handlerCategory}
                        // value={(props.values.category = selectedCategory)}
                      >
                        {categories?.map((category) => {
                          return (
                            <option
                              value={category.nombre}
                              key={category.nombre}
                            >
                              {category.nombre}
                            </option>
                          );
                        })}
                      </Field>
                    </FormControl>
                  </ScaleFade>
                )}
              </Stack>

              <ButtonGroup display="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit" colorScheme="teal" bg="green.500">
                  Filtrar
                </Button>
              </ButtonGroup>
              <PopoverArrow />
              <PopoverCloseButton />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </Form>
    </Formik>
  );
}
Filter.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
