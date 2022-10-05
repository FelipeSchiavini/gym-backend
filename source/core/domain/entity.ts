export class Entity <T> {
    protected _id: number;
    public props: T;

    constructor(props: T, id?: number ){
        this.props = props;
        this._id = id ?? Math.random()*100
    }

    get id() {
        return this._id;
    }
}