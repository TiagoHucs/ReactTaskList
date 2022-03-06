
import { FakeRepository } from "../../repositories/impl/FakeRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const taskRepository = new FakeRepository();

const createTaskUseCase = new CreateTaskUseCase(
    taskRepository
)

const createTaskController = new CreateTaskController(
    createTaskUseCase
)

export { createTaskUseCase , createTaskController } 