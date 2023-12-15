const conta = {
    email: 'lucas@dio.bank',
    password: '123',
    name: 'lucas',
    balance: 5000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
}) 