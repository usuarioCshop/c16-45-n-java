import { useEffect, useState } from "react";
import axios from "axios";
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
const URL_BASE = "http://localhost:8080/"
export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    products.filter((product) => product.id - 1 !== id);
  };

  useEffect(() => {
    axios
      .get(URL_BASE+"api/listar")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
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
              <Tr key={index}>
                <Td>{product.imagenUrl}</Td>
                <Td>{product.detalle}</Td>
                <Td>{product.codigo}</Td>
                <Td>{product.categoria}</Td>
                <Td>$ {product.precio}</Td>
                <Td>{product.cantidad}</Td>
                <Td>
                  <ButtonGroup gap={"4"}>
                    <Button m={5} size={"xs"}>
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
    </>
  );
}
