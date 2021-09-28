import { Router } from 'express';
import { DeleteUserController } from '../useCases/deleteUser/deleteUserController';

const deleteUserRoutes = Router();

const deleteUserController = new DeleteUserController();

deleteUserRoutes.delete('/:id', deleteUserController.delete);

export { deleteUserRoutes };
