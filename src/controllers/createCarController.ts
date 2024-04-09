import { Request, Response } from "express";
import { Task } from "../models/task";
import { tasks } from "../db/tasks";

export const createTaskController = (req: Request, res: Response) =>{
    try {
        const {title, description} = req.body
        if (!title || !description) {
            throw new Error('Todos os parâmetros (título e descrição) são obrigatórios.');
        }

        const newTask = new Task(title, description)

        tasks.push(newTask)

        res.status(200).json({ message: 'Tarefa adicionada com sucesso'})
    } catch (error: any) {
        res.status(400).json({ message: error.message})
    }
}