import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ProductForm from "../products/ProductForm";
export default function ModalWindow() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        backgroundColor={"green.200"}
        alignContent={"center"}
        onClick={onOpen}
        mx="2"
        w="25%"
      >
        <AddIcon mx="2" />
        <p>Categoria</p>
      </Button>
      <Button
        backgroundColor={"green.200"}
        alignContent={"center"}
        onClick={onOpen}
        w="25%"
      >
        <AddIcon mx="2" />
        <p>Producto</p>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Añadir Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductForm m={"1"} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
