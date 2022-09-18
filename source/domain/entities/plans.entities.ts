import { Entity } from "../../core/domain/entity";

interface PlansProps {
    type: string;
    price: number;
} 

export class Plans extends Entity<PlansProps>{
    
    private constructor(props: PlansProps, id?:string){
        super(props, id)
    }

    getPrice(): number {
        return this.props.price
    }

    static create(props: PlansProps, id?:string){
        const classroom = new Plans(props, id)
        return classroom
    }
}

