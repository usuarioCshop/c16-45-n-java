import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PopoverModal from "@/components/ui/PopoverModal";
import ProductForm from "../products/ProductForm.jsx";
export default function ModalWindow() {
  const [openPopover, setOpenPopover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalOpenPopover = () => {
    setOpenPopover(true);
  };
  const closeModalOpenPopover = () => {
    setOpenPopover(false);
  };
  return (
    <>
      <Box position="relative" rigth="0" top="15px">
        <PopoverModal isOpen={openPopover} onClose={closeModalOpenPopover} />
      </Box>
      <ButtonGroup w="100%" display="flex" flexDirection="row-reverse">
        <Button
          backgroundColor={"lightPurple"}
          alignContent={"center"}
          onClick={onOpen}
          minW="35%"
        >
          <AddIcon mx="2" />
          <p>Producto</p>
        </Button>
        <Button
          backgroundColor={"lightPurple"}
          alignContent="center"
          onClick={modalOpenPopover}
          mx="2"
          minW="35%"
        >
          <AddIcon mx="2" />
          <p>Categoria</p>
        </Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Añadir Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProductForm m={"1"} showform={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
