import { Router } from 'express';
import { UpdateUserController } from '../useCases/updateUser/UpdateUserController';

const updateUserRoutes = Router();

const updateUserController = new UpdateUserController();

updateUserRoutes.put('/:id', updateUserController.update);

export { updateUserRoutes };
