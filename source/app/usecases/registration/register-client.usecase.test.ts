import { InMemoryClientsRepository } from "../../../tests/repositories/clients.in-memories"
import { RegisterClients } from "./register-client"

describe('Create new Client use case',  () => {
    test('should create new client', async () => {
        const clientsRepository = new InMemoryClientsRepository()
        const name ='fake'
        const cpf='300.000.000-30'
        const email= 'teste@gmail.com' 
        const planId= 'plan-fake-id'
        

        const register = new RegisterClients(clientsRepository)

        const response = await register.exec({name, cpf, email, planId})
        
        expect(response).toBeTruthy() 
        expect(response.getEmail()).toBe(email)
        expect(response.getName()).toBe(name)
        expect(response.getCpf()).toBe(cpf)

    })
})
    