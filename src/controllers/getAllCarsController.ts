import { Request, Response } from "express"
import { selectAllTasks } from "../db/tasks"


export const getAllTasksController = (req: Request, res: Response) => {
    try {
        const allTasks = selectAllTasks();
        const filteredTasks = allTasks.map((task)=>{
            return {
                id: task.getUuid(),
                title: task.getTitle(),
                description: task.getDescription(),
            }
        })
        if(!filteredTasks.length){
            res.status(404).json({message: 'Nenhuma tarefa encontrada'})
        }
        res.status(200).json(filteredTasks)
    } catch (error: any) {
        return res.status(400).json({message: error.message})
    }
}