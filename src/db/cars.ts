import { Car } from "../models/car";

export let cars: Car[] = [];

export const selectAllCars = () => cars;

export const deleteCarByUuid = (uuidToRemove: string) => {
  const carsUpdated = cars.filter((car) => car.getUuid() !== uuidToRemove);
  
  if (cars.length === carsUpdated.length) {
    throw new Error("Carro não encontrado.");
  } else {
    cars = carsUpdated;
  }
};
