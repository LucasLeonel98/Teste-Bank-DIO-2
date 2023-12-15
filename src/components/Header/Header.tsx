import { Box, Button, Flex, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import Logo from '../Logo'
import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <Flex >

      <Box backgroundColor='#9413dc' padding='4' width='100%'>
        <HStack>
          <Logo />
          {
            isLoggedIn && (
              <>
                <Spacer />
                <Button marginTop='12' onClick={() => logout()}>
                  Sair
                </Button>
              </>
            )
          }
        </HStack>
      </Box>


    </Flex>

  )
}
