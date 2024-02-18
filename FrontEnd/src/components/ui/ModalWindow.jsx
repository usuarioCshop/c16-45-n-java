import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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
      >
        Agregar Productos
        <AddIcon m={"2.5"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductForm m={"1"} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
