import { useRef } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  IconButton,
  Input,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
export default function PopoverModal() {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const newCategory = useRef(null);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={newCategory}
      onOpen={onOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <ButtonGroup>
          <IconButton
            size="sm"
            icon={<AddIcon />}
            aria-label="Agregar Nueva Categoria"
          />
          Agregar Nueva Categoria
        </ButtonGroup>
      </PopoverTrigger>
      <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
          <FormControl variant="floating" my="5" size="sm">
            <Input
              type="text"
              focusBorderColor="green.500"
              placeholder="agrega tu categoria"
            />
            <FormLabel
              htmlFor="productImage"
              fontWeight="bold"
              backgroundColor="white"
            >
              Nueva Categoria
            </FormLabel>
          </FormControl>
          <ButtonGroup display="flex" justifyContent="flex-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button isDisabled colorScheme="teal">
              Save
            </Button>
          </ButtonGroup>
          <PopoverArrow />
          <PopoverCloseButton />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
}
