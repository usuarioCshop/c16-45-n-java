import { IconButton, Heading, Box, Flex, Icon } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
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
      <Heading as="h3" size="2xl"color="darkBlue">
        Productos
      </Heading>
      <Box display="flex" w="80%" p="2">
        <Searchbar/>
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
