import { Express } from 'express'
import { getAllTasksController } from './controllers/getAllCarsController'
import { createTaskController } from './controllers/createCarController';
import { updateTaskController } from './controllers/updateCarController';
import { deleteTaskController } from './controllers/deleteCarController';

export function registerRoutes(app: Express){
    app.get('/tasks', getAllTasksController);
    app.post('/tasks', createTaskController);
    app.put('/tasks/:uuid', updateTaskController);
    app.delete('/tasks/:uuid', deleteTaskController);
}