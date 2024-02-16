import ProductsTable from "@/components/products/ProductsTable";
import ModalWindow from "./components/ui/ModalWindow";
import {
  useTheme,
  useColorMode,
  IconButton,
  ColorModeProvider,
  ThemeProvider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  console.log(colorMode);
  const bg = colorMode === "dark" ? theme.colors.black : theme.colors.white;
  // const color =
  //   colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;
  const toggleIcon = colorMode === "dark" ? <SunIcon /> : <MoonIcon />;
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <IconButton
          icon={toggleIcon}
          onClick={toggleColorMode}
          bg={bg}
          _hover={{ color: "purple63" }}
        ></IconButton>
        <ModalWindow />
        <div>
          <ProductsTable />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
