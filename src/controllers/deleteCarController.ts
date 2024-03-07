import { Request, Response } from "express";
import { deleteCarByUuid } from "../db/cars";


export const deleteCarController = (req: Request, res: Response) => {
    try {
        const uuidToDelete = req.params.uuid
        deleteCarByUuid(uuidToDelete)
        res.status(200).json({message: "Carro deletado com sucesso"})

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}