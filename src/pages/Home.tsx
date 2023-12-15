import { Center, Input, VStack } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { ButtonComp } from "../components/ButtonComp"
import { useContext, useState } from "react"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage } from "../services/storage"


const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()


    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Email ou senha informados incorretos !\nemail correto lucas@dio.bank \nsenha correta 123')
        }
        setIsLoggedIn(true)
        changeLocalStorage({
            login: true
        })
        navigate('/conta/1')
    }
    return (
        <Card>
            {/*{(userData === null || userData === undefined) && <h1>Loading...</h1>}*/}
            <VStack spacing={4} minWidth='50vh'>
                <Center>
                    <h1>Faça o login</h1>

                </Center>
                <Input placeholder="email" type="email" borderWidth='1px' borderStyle='solid' borderColor='black' value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="password" type="password" borderWidth='1px' borderStyle='solid' borderColor='black' value={password} onChange={e => setPassword(e.target.value)} />
                <ButtonComp label='Entrar' trigger={() => validateUser(email, password)} color='facebook' width_button='100%' />
            </VStack>
        </Card>
    )
}

export default Home