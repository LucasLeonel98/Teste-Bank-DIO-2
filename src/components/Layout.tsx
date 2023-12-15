import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Box minHeight='100vh' backgroundColor='#9413dc'>
        <Header />
        {children}
        <Footer />
      </Box>

    </>
  )
}
