import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockUseNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockUseNavigate
}))

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'lucas@dio.bank'
    const mockPassword = '123'

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy
    })

    it('deve exibir erro de email invalido', async () => {
        const response = await login('invalido', 'teste')
        expect(response).toBeFalsy
    })
})