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
import { AddIcon, DeleteIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
export default function ProductsTable() {
  return (
    // <Box
    //   w={["100%", "100%", "80%"]}
    //   m={"auto"}
    //   p={"5"}
    //   backgroundColor={"red.500"}
    // >
    //   Tomates
    // </Box>
    <TableContainer p={5}>
      <Table variant={"striped"} colorScheme="telegram" size={"md"}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>nombre</Th>
            <Th>precio</Th>
            <Th>cantidad</Th>
            <Th>stock</Th>
            <Th>acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>imagen</Td>
            <Td>nombre producto</Td>
            <Td>$100</Td>
            <Td>
              <Button m={3} size={"xs"}>
                <AddIcon />
              </Button>
              10
              <Button m={3} size={"xs"}>
                <MinusIcon />
              </Button>
            </Td>
            <Td>20</Td>
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
        </Tbody>
      </Table>
    </TableContainer>
  );
}
