import { Container, ColorModeProvider, Heading } from "@chakra-ui/react";

import ProductsTable from "@/components/products/ProductsTable";
import Navbar from "@/components/navbar/Navbar";
import ModalWindow from "./components/ui/ModalWindow";

function App() {
  return (
    <ColorModeProvider>
      <Container maxW="{[90%, sm, md]}" bgColor="white">
        <Navbar bgGradient="linear-gradient(180deg, #201F4F 0%, #363583 100%)" />
        <Heading
          as="h2"
          size="3xl"
          colorScheme="purple63"
          m={"5"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          Productos
          <ModalWindow />
        </Heading>
        <ProductsTable />
      </Container>
    </ColorModeProvider>
  );
}

export default App;
