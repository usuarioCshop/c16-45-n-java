import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { BASE_URL } from "@/utils/apiconnect";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const deleteProduct = (id) => {
    //borrando elemento
    products.filter((product) => product.id !== id + 1);
  };

  const editProduct = (id) => {
    //identificando elemento
    const getProduct = products.find((product) => product.id === id + 1);
    console.log(getProduct);
  };

  useEffect(() => {
    BASE_URL.get("listar")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <TableContainer p="2.5" position="relative" top="8rem" maxW="100%">
      <Table variant={"striped"} colorScheme="telegram">
        <Thead>
          <Tr>
            <Th>imagen</Th>
            <Th>nombre filtrar</Th>
            <Th>código</Th>
            <Th>categoria</Th>
            <Th>precio</Th>
            <Th>cantidad</Th>
            <Th>acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={product.id}>
              <Td>{product.imagenUrl}</Td>
              <Td>{product.detalle}</Td>
              <Td>{product.codigo}</Td>
              <Td>{product.categoria}</Td>
              <Td>$ {product.precio}</Td>
              <Td>{product.cantidad}</Td>
              <Td>
                <ButtonGroup gap={"4"}>
                  <Button m={5} size={"xs"} onClick={() => editProduct(index)}>
                    <EditIcon />
                  </Button>
                  <Button
                    m={5}
                    size={"xs"}
                    onClick={() => deleteProduct(index)}
                  >
                    <DeleteIcon />
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
