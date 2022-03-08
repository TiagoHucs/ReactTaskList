import { Task } from "../../entities/Task";
import { MyLogger } from "../../my-logger";
import { ITasksRepository } from "../ITasksRepository";

export class FakeRepository implements ITasksRepository {
   
    private tasks: Task[] = [];

    async findByTitle(title: string): Promise<Task> {
        const task: any = this.tasks.find(task => task.title === title);
        return task;
    }
    async save(task: Task): Promise<void> {
        MyLogger.log("saving new task");
        MyLogger.error("No error reported");
        this.tasks.push(task);
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
    
}