import { useRef, useContext } from "react";
import { ProductContext } from "@/components/context/productos/ProductContext";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";

export default function DialogAlert({ isOpen, onClose, product }) {
  const cancelRef = useRef();
  const { deleteProducts } = useContext(ProductContext);

  const delProducts = (prod) => {
    console.log(prod);
    setTimeout(() => {
      deleteProducts(prod);
      onClose();
    }, 2000);
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            <h3>Eliminar el Producto:</h3>
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Está seguro que desea eliminar este producto?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={delProducts(product)} ml={3}>
              Delete
            </Button>
            <AlertDialogCloseButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
