import { Request, Response } from "express";
import { cars } from "../db/cars";


export const updateCarController = (req: Request, res: Response) => {
    try {
        const uuidToUpdate = req.params.uuid
        const {marca, modelo, ano, cor} = req.body

        if (!marca || !modelo || !ano || !cor) {
            throw new Error('Todos os parâmetros (marca, modelo, ano, cor) são obrigatórios.');
        }
        const carUpdate = cars.findIndex((car)=> car.getUuid() === uuidToUpdate)

        if(carUpdate === -1){
            res.status(404).json({message: "Não encontramos o veículo"})
        }

        cars[carUpdate].updateCar(marca, modelo, ano, cor)

        res.status(200).json({message: 'Carro atualizado com sucesso'})

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}