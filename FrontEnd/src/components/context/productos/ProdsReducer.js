import { BASE_URL } from "@/utils/connectApi";

export default function prodsReducer(state, action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
      return { products: [...action.payload] };
    case "ADD_PRODUCT":
      BASE_URL.post("nuevo", action.payload);
      return { products: [...state.products, action.payload] };
    case "MODIFY_PRODUCT":
      BASE_URL.put(`editar/${action.payload.id}`, action.payload);
      return {
        products: state.products.find(
          (product) =>
            product.id === action.payload.id && (product = action.paylod)
        ),
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "FIND_PRODUCT":
      return {
        products: state.products.filter((product) =>
          product.detalle.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "LIST_CATEGORIES":
      return { products: [...state.products], categories: action.payload };
    case "ADD_CATEGORY":
      console.log(action.payload);
      break;
    case "MODIFY_CATEGORY":
      console.log(action.payload);
      break;
    default:
      return state;
  }
}
