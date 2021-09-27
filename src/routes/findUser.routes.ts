import { Router } from 'express';
import { FindUserController } from '../useCases/findUser/FindUserController';

const findUsersRoutes = Router();

const findUserController = new FindUserController();

findUsersRoutes.get('/:id', findUserController.index);

export { findUsersRoutes };
