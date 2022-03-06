import { FakeRepository } from "../../repositories/impl/FakeRepository";

import { ListTasksController } from "./ListTasksController";
import { ListTasksUseCase } from "./ListTasksUseCase";

const taskRepository = new FakeRepository();

const listTasksUseCase = new ListTasksUseCase(
    taskRepository
)

const listTasksController = new ListTasksController(
    listTasksUseCase
)

export { listTasksUseCase , listTasksController } 