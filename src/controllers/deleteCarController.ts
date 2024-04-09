import { Request, Response } from "express";
import { deleteTaskByUuid } from "../db/tasks";


export const deleteTaskController = (req: Request, res: Response) => {
    try {
        const uuidToDelete = req.params.uuid
        deleteTaskByUuid(uuidToDelete)
        res.status(200).json({message: "Tarefa deletada com sucesso"})

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}