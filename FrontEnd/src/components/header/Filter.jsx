import { Button, ButtonGroup } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useContext, useState } from "react";
import { ProductContext } from "../context/productos/ProductContext";
import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
} from "@chakra-ui/popover";
import { FocusLock } from "@chakra-ui/focus-lock";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Checkbox } from "@chakra-ui/checkbox";
import { Select } from "@chakra-ui/select";
import { useEffect } from "react";

import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

export const Filter = ({ isOpen, onClose }) => {
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
        console.log(values);
        // onClose();
      }, 2000);
    },
  });

  const filtroSelected = (valores) => {
    console.log(valores);
    onClose();
  };
//   const handlerFields = (fieldName, value) => {
//     formik.setFieldValue(fieldName, value);
//   };

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
              <Checkbox name="codigo">Código</Checkbox>

              <FormControl variant="floating" my="5" size="sm">
                <Field
                as={Input}
                  type="text"
                  focusBorderColor="green.500"
                  placeholder="agrega tu categoria"
                  //   onChange={(e) => handlerFields("detalle", e.target.value)}
                  // value={formik.values.detalle}
                  // ref={newCategory}
                />
                <FormLabel
                  htmlFor="productImage"
                  fontWeight="bold"
                  backgroundColor="white"
                >
                  Codigo
                </FormLabel>
              </FormControl>
              {/* {error && <FormErrorMessage value={error.message} />} */}
              <Checkbox nema="precio">Precio</Checkbox>
              <FormControl variant="floating" my="5" size="sm">
                <Field
                    as={Input}
                  type="text"
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
                  type="text"
                  focusBorderColor="green.500"
                  name="maxPrecio"
                  // ref={descriptionCategory}
                />
                <FormLabel
                  htmlFor="maxPrecio"
                  fontWeight="bold"
                  backgroundColor="white"
                >
                  Máx.
                </FormLabel>
              </FormControl>
              {/* {error && <FormErrorMessage value={error.message} />} */}
              <Checkbox nema="cantidad">Cantidad</Checkbox>
              <FormControl variant="floating" my="5" size="sm">
              <Field
                    as={Input}
                  type="text"
                  focusBorderColor="green.500"
                  name="canMin"
                  // ref={descriptionCategory}
                />
                <FormLabel
                  htmlFor="canMin"
                  fontWeight="bold"
                  backgroundColor="white"
                >
                  Min
                </FormLabel>
              </FormControl>

              <FormControl variant="floating" my="5" size="sm">
              <Field
                    as={Input}
                  type="text"
                  focusBorderColor="green.500"
                  name="canMax"
                  // ref={descriptionCategory}
                />
                <FormLabel
                  htmlFor="canMax"
                  fontWeight="bold"
                  backgroundColor="white"
                >
                  Max
                </FormLabel>
              </FormControl>
              {/* {error && <FormErrorMessage value={error.message} />} */}
              <Checkbox nema="categoria">Categoria</Checkbox>
              <FormControl variant="floating" my="5" size="sm">
              <Field
                as={Select}
                placeholder="Selecciona una categoria"
                name="category"
                focusBorderColor="green.500"
                // onChange={handlerCategory}
                // value={(props.values.category = selectedCategory)}
              >
                {categories?.map((category) => {
                  return (
                    <option value={category.nombre} key={category.nombre}>
                      {category.nombre}
                    </option>
                  );
                })}
                <option value="add">Agregar Categoria</option>
              </Field>
              </FormControl>
              {/* {error && <FormErrorMessage value={error.message} />} */}
              <ButtonGroup display="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={filtroSelected}>
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
};
