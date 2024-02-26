import { createContext, useState, useEffect, useMemo } from "react";
import { PropTypes } from "prop-types";
import { BASE_URL } from "@/utils/connectApi";

export const CategoryContext = createContext({
  categories: [],
  category: {},
});

export default function CategoryContextProvider({ children }) {
  const [categoryManager, setCategoryManager] = useState({
    categories: [],
    category: {
      nombre: "",
      descripcion: "",
    },
  });

  const addNewCategory = (newCategory) => {
    console.log(newCategory);
    setCategoryManager((prev) => {
      return {
        category: { nombre: newCategory, descripcion: "una descripcion aca" },
        categories: [...prev.categories, prev.category.nombre],
      };
    });
    BASE_URL.post("categoria", categoryManager.category);
  };

  const editCategories = (product, confirmation) => {
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

  useEffect(() => {
    BASE_URL.get("categorias")
      .then((response) => {
        setCategoryManager((prev) => {
          return {
            ...prev,
            categories: response.data,
          };
        });
      })
      .catch((error) => console.log(error));
    console.log(categoryManager.categories);
  }, [categoryManager]);

  const categoryCtxt = useMemo(() => {
    return {
      categories: categoryManager.categories,
      category: categoryManager.category,
      addNewCategory,
      editCategories,
    };
  }, []);

  return (
    <CategoryContext.Provider value={categoryCtxt}>
      {children}
    </CategoryContext.Provider>
  );
}

CategoryContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
