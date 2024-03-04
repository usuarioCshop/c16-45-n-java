import { createContext, useReducer, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";
import { BASE_URL } from "@/utils/connectApi";
import prodsReducer from "./ProdsReducer";

const initialState = {
  products: [
    {
      detalle: "carpeta1",
      precio: 456.54,
      codigo: "PROD01",
      categoria: "categoria1",
      fechaAlta: "2024-03-04",
      cantidad: 60,
      marca: "Arcor",
      imagenUrl: "http://example.com/imagen.png",
    },
    {
      detalle: "producto2",
      precio: 789.54,
      codigo: "PROD02",
      categoria: "categoria2",
      fechaAlta: "2024-02-28",
      cantidad: 30,
      marca: "LaQue Sea",
      imagenUrl: "http://example.com/imagen.png",
    },
  ],
  product: {
    detalle: "",
    precio: "",
    codigo: "",
    categoria: "",
    fechaAlta: "",
    cantidad: "",
    marca: "",
    imagenUrl: "",
  },
  categories: [
    { nombre: "categoria1", descripcion: "la descripcion de la categoria 1" },
    { nombre: "categoria2", descripcion: "la descripcion de la categoria 2" },
    { nombre: "categoria3", descripcion: "la descripcion de la categoria 3" },
    { nombre: "categoria4", descripcion: "la descripcion de la categoria 4" },
  ],
  category: {
    nombre: "",
    descripcion: "",
    activo: true,
  },
};

export const ProductContext = createContext(initialState);

export default function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(prodsReducer, initialState);

  // CATEGORIAS
  const listCategories = () => {
    BASE_URL.get("categorias")
      .then((response) =>
        dispatch({ type: "LIST_CATEGORIES", payload: response.data })
      )
      .catch((error) => console.log(error));
  };

  const addNewCategory = (newCategory) => {
    dispatch({ type: "ADD_CATEGORY", payload: newCategory });
  };

  const editCategories = (category) => {
    dispatch({ type: "MODIFY_CATEGORY", payload: category });
  };

  // PRODUCTOS
  const listProducts = (productsList) => {
    dispatch({ type: "LIST_PRODUCTS", payload: productsList });
  };

  const addProducts = (newProduct) => {
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const editProducts = (product) => {
    dispatch({ type: "MODIFY_PRODUCT", payload: product });
  };

  const deleteProducts = (itemDeleted) => {
    dispatch({ type: "DELETE_PRODUCT", payload: itemDeleted });
  };

  const onFind = (producto) => {
    dispatch({
      type: "FIND_PRODUCT",
      payload: producto,
    });
  };

  useEffect(() => {
    BASE_URL.get("listar")
      .then((response) => {
        listProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const productCtxt = useMemo(() => {
    return {
      ...state,
      addProducts,
      deleteProducts,
      editProducts,
      addNewCategory,
      editCategories,
      listCategories,
      onFind,
    };
  }, [state]);

  return (
    <ProductContext.Provider value={productCtxt}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
