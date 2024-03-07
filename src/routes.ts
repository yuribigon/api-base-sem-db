import { Express } from 'express'
import { getAllCarsController } from './controllers/getAllCarsController'
import { createCarController } from './controllers/createCarController';
import { updateCarController } from './controllers/updateCarController';
import { deleteCarController } from './controllers/deleteCarController';

export function registerRoutes(app: Express){
    app.get('/cars', getAllCarsController);
    app.post('/cars', createCarController);
    app.put('/cars/:uuid', updateCarController);
    app.delete('/cars/:uuid', deleteCarController);
}