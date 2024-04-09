import { Request, Response } from "express"
import { selectAllCars } from "../db/cars"


export const getAllCarsController = (req: Request, res: Response) => {
    try {
        const allCars = selectAllCars();
        const filteredCars = allCars.map((car)=>{
            return {
                id: car.getUuid(),
                brand: car.getBrand(),
                model: car.getModel(),
                year: car.getYear(),
                color: car.getColor()
            }
        })
        if(!filteredCars.length){
            res.status(404).json({message: 'Nenhum carro encontrado'})
        }
        res.status(200).json(filteredCars)
    } catch (error: any) {
        return res.status(400).json({message: error.message})
    }
}