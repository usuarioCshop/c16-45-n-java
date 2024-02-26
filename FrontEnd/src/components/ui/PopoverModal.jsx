import { useContext, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  FocusLock,
  Input,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CategoryContext } from "@/components/context/productos/CategoriesContext";

export default function PopoverModal({ isOpen, onClose }) {
  const newCategory = useRef(null);
  const { addNewCategory } = useContext(CategoryContext);
  const [error, setError] = useState(null);

  const saveCategory = () => {
    if (newCategory.current) {
      addNewCategory(newCategory.current.value);
    } else {
      setError({ message: "agregue una nueva categoria" });
    }
    setTimeout(() => onClose(), 3000);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
          <FormControl variant="floating" my="5" size="sm">
            <Input
              type="text"
              focusBorderColor="green.500"
              placeholder="agrega tu categoria"
              ref={newCategory}
            />
            <FormLabel
              htmlFor="productImage"
              fontWeight="bold"
              backgroundColor="white"
            >
              Nueva Categoria
            </FormLabel>
          </FormControl>
          {error && <FormErrorMessage value={error.message} />}
          <ButtonGroup display="flex" justifyContent="flex-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={saveCategory}>
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

PopoverModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
