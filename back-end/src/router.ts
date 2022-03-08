import { Router } from 'express';
import { createTaskController, listTasksController } from './useCases';

const router = Router();

router.post('/tasks', (req, res) => {
    return createTaskController.handle(req, res);
})

router.get('/tasks', (req, res) => {
    return listTasksController.handle(req, res);
})

router.get('/tasks/:taskId', (req, res) => {
/*    
    const { taskId } = req.params;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    return res.status(200).json(task); */
})

router.delete('/tasks/:taskId', (req, res) => {
/*     const { taskId } = req.params;
    const filterTasks = tasks.filter((t) => t.id !== taskId);
    tasks = filterTasks;
    return res.status(204).json("DELETED"); */
})

router.patch('/tasks/:taskId', (req, res) => {
/*     const { title, completed } = req.body
    const { taskId } = req.params;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    task.title = title ? title : task.title;
    task.completed = completed ? completed : task.completed;
    return res.status(200).json(task); */
})

export { router };