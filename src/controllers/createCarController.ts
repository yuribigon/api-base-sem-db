import { Request, Response } from "express";
import { Car } from "../models/car";
import { cars } from "../db/cars";

export const createCarController = (req: Request, res: Response) =>{
    try {
        const {brand, model, year, color} = req.body
        if (!brand || !model || !year || !color) {
            throw new Error('Todos os parâmetros (marca, modelo, ano, cor) são obrigatórios.');
        }

        const newCar = new Car(brand, model, year, color)

        cars.push(newCar)

        res.status(200).json({ message: 'Carro criado com sucesso'})
    } catch (error: any) {
        res.status(400).json({ message: error.message})
    }
}