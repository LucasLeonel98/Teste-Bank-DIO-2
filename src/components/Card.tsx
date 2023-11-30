import { AbsoluteCenter, Box, Center, ChakraProvider, Input, VStack } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonComp } from "./ButtonComp"
import { login } from "../services/login"



export const Card = () => {
  return (
    <ChakraProvider>

      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <AbsoluteCenter axis='both' p='4'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <VStack spacing={4}>
              <Header />
              <Center>
                <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email" type="email" borderWidth='1px' borderStyle='solid' borderColor='black' />
              <Input placeholder="password" type="password" borderWidth='1px' borderStyle='solid' borderColor='black' />
              <ButtonComp label='Entrar' trigger={login} color='facebook' width_button='100%' />
            </VStack>
          </Box>
        </AbsoluteCenter>
      </Box>


    </ChakraProvider>
  )
}