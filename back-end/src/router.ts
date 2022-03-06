import { Router } from 'express';
import { createTaskController } from './useCases/CreateTask';
const router = Router();

//let tasks: any[] = [];

router.post('/tasks', (req, res) => {
    return createTaskController.handle(req, res);

    /*     console.log(`post`)
    const { id, title, completed } = req.body
    const task = { id, title, completed }
    tasks.push(task);
    console.log(`Added: ${task.id}`)
    return res.status(201).json(task); */
})

router.get('/tasks', (req, res) => {
/*     console.log(`GetAll`)
    return res.status(200).json(tasks); */
    return createTaskController.findAll(req, res);
})

router.get('/tasks/:taskId', (req, res) => {
/*     console.log(`GetOne`)
    const { taskId } = req.params;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    return res.status(200).json(task); */
})

router.delete('/tasks/:taskId', (req, res) => {
/*     const { taskId } = req.params;
    console.log(`deleting ${taskId}`)
    const filterTasks = tasks.filter((t) => t.id !== taskId);
    tasks = filterTasks;
    return res.status(204).json("DELETED"); */
})

router.patch('/tasks/:taskId', (req, res) => {
/*     const { title, completed } = req.body
    const { taskId } = req.params;
    console.log(`Updating ${taskId}`)
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    task.title = title ? title : task.title;
    task.completed = completed ? completed : task.completed;
    return res.status(200).json(task); */
})

export { router };