import { createContext, useState, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";
import { BASE_URL } from "@/utils/connectApi";

export const ProductContext = createContext({
  products: [],
  product: {},
  categories: [],
});

export default function ProductContextProvider({ children }) {
  const [productManager, setProductManager] = useState({
    products: [],
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
    categories: [],
  });

  const addProducts = (newProduct) => {
    BASE_URL.post("nuevo", newProduct);
    setProductManager((prev) => {
      return {
        ...prev,
        products: [...prev.products, newProduct],
      };
    });
  };

  const editProducts = (product, confirmation) => {
    console.log(product);
    console.log(confirmation);
    // if (confirmation.current) {
    //   setTimeout(() => {
    //     BASE_URL.delete(`editar/${product.id}`);
    //   }, 3000);
    //   setProductManager((prev) => {
    //     return {
    //       ...prev,
    //       products: prev.products.filter(
    //         (product) => product.id === product.id
    //       ),
    //     };
    //   });
    // }
  };

  const deleteProducts = (itemDeleted, confirmation) => {
    if (confirmation.current) {
      setTimeout(() => {
        BASE_URL.delete(`eliminar/${itemDeleted.id}`);
      }, 3000);
      setProductManager((prev) => {
        return {
          ...prev,
          products: prev.products.filter(
            (product) => product.id !== itemDeleted.id
          ),
        };
      });
    }
  };

  const addNewCategory = (newCategory) => {
    BASE_URL.post("categoria", newCategory);
    setProductManager((prev) => {
      return {
        categories: [...prev.categories, newCategory],
      };
    });
  };

  useEffect(() => {
    BASE_URL.get("listar")
      .then((response) => {
        setProductManager((prev) => {
          return {
            ...prev,
            products: response.data,
          };
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const productCtxt = useMemo(() => {
    return {
      products: productManager.products,
      product: productManager.product,
      addProducts,
      deleteProducts,
      editProducts,
      categories: productManager.categories,
      addNewCategory,
    };
  }, [productManager]);

  return (
    <ProductContext.Provider value={productCtxt}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
