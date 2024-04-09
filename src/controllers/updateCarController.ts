import { Request, Response } from "express";
import { cars } from "../db/cars";


export const updateCarController = (req: Request, res: Response) => {
    try {
        const uuidToUpdate = req.params.uuid
        const {brand, model, year, color} = req.body

        if (!brand || !model || !year || !color) {
            throw new Error('Todos os parâmetros (marca, modelo, ano, cor) são obrigatórios.');
        }
        const carUpdate = cars.findIndex((car)=> car.getUuid() === uuidToUpdate)

        if(carUpdate === -1){
            res.status(404).json({message: "Não encontramos o veículo"})
        }

        cars[carUpdate].updateCar(brand, model, year, color)

        return res.status(200).json({message: 'Carro atualizado com sucesso'})

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}