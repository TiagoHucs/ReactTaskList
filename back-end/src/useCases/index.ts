import { FakeRepository } from "../repositories/impl/FakeRepository";
import { CreateTaskController } from "./CreateTask/CreateTaskController";
import { CreateTaskUseCase } from "./CreateTask/CreateTaskUseCase";
import { ListTasksController } from "./ListTasks/ListTasksController";
import { ListTasksUseCase } from "./ListTasks/ListTasksUseCase";

const taskRepository = new FakeRepository();

//CREATE TASK
const createTaskUseCase = new CreateTaskUseCase(
    taskRepository
)

const createTaskController = new CreateTaskController(
    createTaskUseCase
)

//LIST TASKS
const listTasksUseCase = new ListTasksUseCase(
    taskRepository
)

const listTasksController = new ListTasksController(
    listTasksUseCase
)

export { 
    createTaskUseCase,
    createTaskController,
    listTasksUseCase,
    listTasksController
} 