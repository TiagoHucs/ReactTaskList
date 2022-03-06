import { Task } from "../entities/Task";

export interface ITasksRepository {
    findByTitle(title: string): Promise<Task>;
    save(task: Task): Promise<void>;
    findAll(): Promise<Task[]>;
}