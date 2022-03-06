import { ITasksRepository } from "../../repositories/ITasksRepository";

export class ListTasksUseCase {
    
    constructor(
        private tasksRepository: ITasksRepository
    ) {}

    async execute(){
        const tks = await this.tasksRepository.findAll();
        return tks;
    }

}