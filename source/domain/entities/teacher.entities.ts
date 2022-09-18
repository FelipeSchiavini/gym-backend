import { Entity } from "../../core/domain/entity";

interface TeacherProps {
    name: string;
    cpf: string;
    email: string;
} 

export class Teacher extends Entity<TeacherProps>{
    
    private constructor(props: TeacherProps, id?:string){
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

    static create(props: TeacherProps, id?:string){
        const client = new Teacher(props, id)
        return client
    }

}