import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { useParams, useNavigate, Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"

export interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | IUserData>()
    const { id } = useParams()
    const actualDate = new Date()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)

    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    if (!isLoggedIn) navigate('/')

    console.log('Componente conta', isLoggedIn)




    return (
        <Center minHeight='80vh'>
            <SimpleGrid columns={2} spacing={8} >
                {
                    userData === null || userData === undefined ?
                        (
                            <Center>
                                <Spinner size='xl' color='gray' />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent='Informações de acesso' content={`bem vindo(a), ${userData?.name} ${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`} />
                                <CardInfo mainContent='Saldo' content={`R$ ${userData?.balance}`} />
                                <Link to='/conta/1/info'>
                                    <Text color='#FFF' size='xl'>
                                        Ir para Informações da conta
                                    </Text>
                                </Link>
                            </>
                        )

                }


            </SimpleGrid>
        </Center>
    )
}

export default Conta