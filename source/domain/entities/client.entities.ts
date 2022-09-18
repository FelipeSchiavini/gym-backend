import { Entity } from "../../core/domain/entity";

interface ClientProps {
    name: string;
    cpf: string;
    email: string;
    planId: string; 
} 

export class Client extends Entity<ClientProps>{
    
    private constructor(props: ClientProps, id?:string){
        super(props, id)
    }

    getName(): string {
        return this.props.name
    }

    getEmail(): string {
        return this.props.email
    }

    getCpf(): string {
        return this.props.cpf
    }

    static create(props: ClientProps, id?:string){
        const client = new Client(props, id)
        return client
    }

}