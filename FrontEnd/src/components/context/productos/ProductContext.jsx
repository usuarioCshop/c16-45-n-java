import { createContext, useReducer, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";
import { BASE_URL } from "@/utils/connectApi";
import prodsReducer from "./ProdsReducer";

const initialState = {
  products: [],
  product: {
    detalle: "",
    precio: "",
    codigoBarra: "",
    categoria: "",
    fechaAlta: "",
    cantidad: "",
    marca: "",
    imagenUrl: "",
  },
  categories: [],
  category: {
    nombre: "",
    descripcion: "",
    activo: true,
  },
};

export const ProductContext = createContext(initialState);

export default function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(prodsReducer, initialState);

  //FILTRADOS
  //prueba de acceso al endpoint de filtrar-precio
  const filterTodo = async (values) => {
    
    const response = await BASE_URL.get("filtrar-precio",{params:values});
    dispatch({ type: "FILTRAR_TODO", payload: response.data });
  };
  
  // const filterByCategory = (filterValue) => {
  //   dispatch({ type: "FILTER_BY_CATEGORY", payload: filterValue });
  // };

  // const filterByPrice = (min, max) => {
  //   dispatch({ type: "FILTER_BY_PRICE", payload: { min, max } });
  // };

  // const filterByQuantity = (min, max) => {
  //   dispatch({ type: "FILTER_BY_QUANTITY", payload: { min, max } });
  // };

  // const filterByCode = (filterValue) => {
  //   dispatch({ type: "FILTER_BY_CODE", payload: filterValue });
  // };

  // CATEGORIAS
  
  //
  const listCategories = async () => {
    const response = await BASE_URL.get("categorias");
    dispatch({ type: "LIST_CATEGORIES", payload: response.data });
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

  const buscador = (prod) => {
    dispatch({ type: "FIND_PRODUCT", payload: prod });
  };

  const onFind = (producto) => {
    if (producto !== "") {
      let getProduct = state.products.filter((prod) =>
        prod.detalle.toLowerCase().includes(producto.toLowerCase())
      );
      buscador(getProduct);
    } else {
      BASE_URL.get("listar")
        .then((response) => {
          listProducts(response.data);
        })
        .catch((error) => console.log(error));
    }
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
      // filterByCategory,
      // filterByCode,
      // filterByPrice,
      // filterByQuantity,
      filterTodo,
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
