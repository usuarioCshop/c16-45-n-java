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
export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/listar")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <TableContainer p={5}>
        <Table variant={"striped"} colorScheme="telegram" size={"md"}>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>nombre</Th>
              <Th>precio</Th>
              <Th>fecha</Th>
              <Th>stock</Th>
              <Th>acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={index}>
                <Td>{product.imagenUrl}</Td>
                <Td>{product.detalle}</Td>
                <Td>{product.precio}$</Td>
                <Td>{product.cantidad}</Td>
                <Td>
                  <ButtonGroup gap={"4"}>
                    <Button m={5} size={"xs"}>
                      <EditIcon />
                    </Button>
                    <Button m={5} size={"xs"}>
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
