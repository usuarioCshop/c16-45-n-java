import { Container } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import ProductsTable from "@/components/products/ProductsTable";
import Navbar from "@/components/navbar/Navbar";

function App() {
  return (
    <Container maxW="{[80%, sm, md]}" h="100vh">
      <Navbar />
      <Header />
      <ProductsTable />
    </Container>
  );
}

export default App;
