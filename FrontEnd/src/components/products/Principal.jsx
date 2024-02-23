import { Container } from "@chakra-ui/layout";
import ProductsTable from "./ProductsTable.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Header from "../header/Header.jsx";

export const Principal = () => {
  return (
    <Container maxW="{[80%, sm, md]}" h="100vh">
      <Navbar />
      <Header />
      <ProductsTable />
    </Container>
  );
};
