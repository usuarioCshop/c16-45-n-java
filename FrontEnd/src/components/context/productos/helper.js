import { BASE_URL } from "@/utils/connectApi";

export async function loadProducts() {
  const productsList = await BASE_URL.get("listar")
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return productsList;
}
