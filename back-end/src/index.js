const express = require('express');
const cors = require('cors')

//fake database
let tasks = [
    {
        "id": "1",
        "title": "Primeira atividade",
        "completed": false
    },
    {
        "id": "2",
        "title": "Outra atividade",
        "completed": true
    }
];

//criar app
const app = express();

//aplicar middlewares
app.use(express.json());
app.use(cors());

app.post('/tasks', (req, res) => {
    const { id, title, completed } = req.body
    const task = { id, title, completed }
    tasks.push(task);
    return res.status(201).json(task);
})

app.get('/tasks', (req, res) => {
    return res.status(200).json(tasks);
})

app.get('/tasks/:taskId', (req, res) => {
    const { taskId } = req.params;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    return res.status(200).json(task);
})

app.delete('/tasks/:taskId', (req, res) => {
    console.log('deleting')
    const { taskId } = req.params;
    console.log(`deleting ${taskId}`)
    const filterTasks = tasks.filter((t) => t.id !== taskId);
    tasks = filterTasks;
    return res.status(204).json("DELETED");
})

app.patch('/tasks/:taskId', (req, res) => {
    const { title, completed } = req.body
    const { taskId } = req.params;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) res.status(404).json("NOT FOUND");
    task.title = title ? title : task.title;
    task.completed = completed ? completed : task.completed;
    return res.status(200).json(task);
})

//mandar server rodar
app.listen(3333, () => console.log('Server is running...'));
