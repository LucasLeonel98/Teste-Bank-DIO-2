import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { IUserData } from "./Conta"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"

export const ContaInfo = () => {
    const [userData, setUserData] = useState<null | IUserData>()
    const { isLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    if (!isLoggedIn) navigate('/')
    console.log('Componente info conta', isLoggedIn)
    return (
        <>
            <Box>
                {
                    userData === null || userData === undefined ?
                        (
                            <Center>
                                <Spinner size='xl' color='#FFF' />
                            </Center>
                        )
                        :
                        (
                            <>
                                <Box minH='80vh'>
                                    <Center>
                                        <SimpleGrid spacing={8} margin={4}>
                                            <Text fontSize='3xl' fontWeight='bold' color='#FFF'>
                                                Informacões da conta
                                            </Text>
                                            <CardInfo mainContent='Nome' content={`${userData?.name}`} />
                                            <CardInfo mainContent='Email' content={`${userData?.email}`} />
                                        </SimpleGrid>


                                    </Center>
                                    <Center>
                                        <Link to='/conta/1'>
                                            <Text fontSize='xl' color='#FFF'>
                                                Voltar para pagina de conta
                                            </Text>

                                        </Link>
                                    </Center>
                                </Box>

                            </>
                        )
                }

            </Box>



        </>
    )
}