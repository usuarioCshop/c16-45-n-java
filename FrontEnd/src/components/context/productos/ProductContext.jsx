import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "@/utils/connectApi";

export const ProductContext = createContext({
  products: [],
  product: {},
});

export default function ProductContextProvider({ children }) {
  const [productManager, setProductManager] = useState({
    products: [],
    product: {
      detalle: "",
      precio: "",
      categoria: "",
      fechaAlta: "",
      cantidad: "",
      marca: "",
      imagenUrl: "",
    },
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

  const deleteProducts = (id) => {
    // BASE_URL.delete(`eliminar/${product.id}`);
    console.log(id);
    setProductManager((prev) => {
      return {
        ...prev,
        products: prev.products.filter((product) => product.id !== id),
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

  const productCtxt = {
    products: productManager.products,
    product: productManager.product,
    addProducts,
    deleteProducts,
  };

  return (
    <ProductContext.Provider value={productCtxt}>
      {children}
    </ProductContext.Provider>
  );
}
