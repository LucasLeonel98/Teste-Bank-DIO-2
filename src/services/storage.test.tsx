import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}


describe('storage', () => {
    const setitem = jest.spyOn(Storage.prototype, 'setItem')
    it('deve retornar local storage com o valor diobank', () => {
        const getitem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(getitem).toHaveBeenCalledWith('diobank')
    })

    it('deve criar objeto no local storage', () => {
        createLocalStorage()
        expect(setitem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('deve alterar objeto no local storage', () => {
        changeLocalStorage(diobank)
        expect(setitem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
}) 