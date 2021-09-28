import { Router } from 'express';
import { FindAllUserController } from '../useCases/findAllUser/FindAllUserController';

const findAllUsersRoutes = Router();

const findAllUserController = new FindAllUserController();

findAllUsersRoutes.get('/', findAllUserController.index);

export { findAllUsersRoutes };
