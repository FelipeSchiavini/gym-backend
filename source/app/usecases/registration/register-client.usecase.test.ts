import { RegisterClients } from "./register-client"

describe('Create new Client use case',  () => {
    test('invalid cpf should throw Error', async () => {
        const name = 'Felipe'
        const cpf = '309.513.038-48'
        const email = 'felipe@gmail.com'
        const planId = '1'
        const register = new RegisterClients()

        const response = await register.exec({name, cpf, email, planId})
        
        expect(response).toBeTruthy() 
        expect(response.getEmail()).toBe(email)
        expect(response.getName()).toBe(name)
        expect(response.getCpf()).toBe(cpf)

    })
})
    