import { Entity } from "../../core/domain/entity";

interface ClientProps {
    name: string;
    cpf: string;
    email: string;
    planId?: string;
}

interface getInfoParams extends ClientProps {
    id: number
}

export class Client extends Entity<ClientProps>{
    
    private constructor(props: ClientProps, id?:number){
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

    getPlanId(): string | undefined {
        return this.props?.planId
    }

    getInfo(): getInfoParams {
        return {
            cpf: this.getCpf(),
            name: this.getName(),
            email: this.getName(),
            id: this.id,
            planId: this.getPlanId(),
        }
    }

    static create(props: ClientProps, id?:number){
        const client = new Client(props, id)
        return client
    }

}