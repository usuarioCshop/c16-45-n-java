import {
  Image,
  HStack,
  Box,
  Link,
  Avatar,
  useTheme,
  useColorMode,
  IconButton,
  Input,
  FormControl,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  console.log(colorMode);
  console.log(theme);
  const bg =
    colorMode === "dark" ? theme.colors.blackAlpha : theme.colors.white;
  // const color =
  //   colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;
  const toggleIcon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
  return (
    <HStack
      w="100%"
      bg={"gray.50"}
      justifyContent="space-between"
      p={"5"}
      marginBottom={"5"}
      alignItems="center"
    >
      <Box>
        <Image
          boxSize="80px"
          objectFit="cover"
          src="@/assets/react.svg"
          alt="brand_logo"
        />
      </Box>
      <Box
        w="80%"
        bg="red.200"
        display="flex"
        justifyContent="space-around"
        p={"2"}
      >
        <FormControl>
          <InputGroup>
            <Input type="search" placeholder="search products" size="sm" />
            <InputRightElement>
              <IconButton
                h="1.75rem"
                size="sm"
                aria-label="searchbar"
                icon={<SearchIcon />}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Link>filter</Link>
        <IconButton
          icon={toggleIcon}
          onClick={toggleColorMode}
          bg={bg}
          _hover={{ color: "purple63" }}
        ></IconButton>
        <Link>
          <Avatar name="username" src="user.png" />
          User Administrator
        </Link>
      </Box>
    </HStack>
  );
}
