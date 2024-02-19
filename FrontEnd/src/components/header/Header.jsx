import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Heading,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ModalWindow from "@/components/ui/ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      position="relative"
      top="7rem"
    >
      <Heading as="h3" size="2xl">
        Productos
      </Heading>
      <Box display="flex" w="80%" p="2">
        <FormControl mx="2">
          <InputGroup>
            <Input type="search" placeholder="buscar producto" bg="white" />
            <InputRightElement>
              <IconButton
                aria-label="searchbar"
                icon={<SearchIcon />}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <IconButton>
          <Icon alignSelf="center">
            <FontAwesomeIcon icon={faFilter} size="xl" />
          </Icon>
        </IconButton>
        <ModalWindow />
      </Box>
    </Flex>
  );
}
