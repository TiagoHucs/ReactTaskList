import { uuid } from 'uuidv4';

export class Task { 
    public readonly id!: string;
    public title!: string;

    constructor(props: Omit<Task, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
}