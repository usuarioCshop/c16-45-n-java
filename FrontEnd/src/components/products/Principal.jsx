import { ColorModeProvider } from '@chakra-ui/color-mode'
import { Container, Heading } from '@chakra-ui/layout'

import ProductsTable from './ProductsTable.jsx'
import Navbar from '../navbar/Navbar.jsx'
import ModalWindow from '../ui/ModalWindow.jsx'

export const Principal = () => {
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
  )
}
