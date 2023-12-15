import { AbsoluteCenter, Box, Center, ChakraProvider, Input, VStack } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { ButtonComp } from "./ButtonComp"
import { login } from "../services/login"
import { useState } from "react"


interface IUserData {
  email: string,
  password: string,
  name: string
}

export const Card = ({ children }: any) => {


  return (
    <Box minHeight='77vh' >
      <AbsoluteCenter axis='both' p='4'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          {children}
        </Box>
      </AbsoluteCenter>
    </Box>



  )
}