import {
    
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Container
  } from '@chakra-ui/react'

export const Prueba = () => {
  return (
    <Container>
      <Center
        display="flex"
        flexDirection="column"
        color="whiteAlpha.500"
        backgroundColor="#bbb7dd"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl isRequired display="flex" flexDirection="row" width="50%">
          <FormLabel
            display="flex"
            minWidth={100}
            color="whiteAlpha.900"
            fontWeight="bold"
          >
            Usuario
          </FormLabel>
          <Input width={100} fontWeight="bold" color="messenger.800" m="5px"/>
        </FormControl>
        <FormControl display="flex" width="50%" isRequired>
          <FormLabel
            display="flex"
            minWidth={100}
            fontWeight="bold"
            color="whiteAlpha.900"
          >
            Clave
          </FormLabel>
          <Input display="flex" width={100} m="5px" />
        </FormControl>
        <Button
          variant="solid"
          size="md"
          colorScheme="#369369"
          textAlign="center"
          fontWeight="bold"
          color="red.500"
          backgroundColor="blackAlpha.200"
          bgGradient="linear(to bottom right, green.200,green.500)"
        >
          Ingresar
        </Button>
      </Center>
    </Container>
  )
}
