import { IconButton, Heading, Box, Flex, Icon } from "@chakra-ui/react";
import Searchbar from "./Searchbar";
import ModalWindow from "@/components/ui/ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Filter } from "./Filter";
export default function Header() {
  const [openFilter, setOpenFilter] = useState(false);

  const abrirFilter = () => {
    setOpenFilter(true);
  };

  const cerrarFilter = () => {
    setOpenFilter(false);
  };
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      top="7rem"
      flexDirection={["column", "row"]}
    >
      <Heading as="h3" size="2xl" color="darkBlue">
        Productos
      </Heading>
      <Box display="flex" w="80%" p="2">
        <Searchbar />
        <IconButton width="15px" onClick={abrirFilter}>
          <Icon alignSelf="center">
            <FontAwesomeIcon icon={faFilter} size="xl" />
          </Icon>
        </IconButton>
        <Box position="relative" rigth="0" top="15px">
          <Filter isOpen={openFilter} onClose={cerrarFilter} />
      </Box>
        
      </Box>
      <Flex width="100%" alignItems="center" justifyContent="center">
        <ModalWindow />
      </Flex>
    </Flex>
  );
}
