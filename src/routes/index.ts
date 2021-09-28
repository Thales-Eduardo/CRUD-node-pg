import { Router } from 'express';

import { usersRoutes } from './createUser.routes';
import { findUsersRoutes } from './findUser.routes';
import { updateUserRoutes } from './updateUser.routes';
import { deleteUserRoutes } from './deleteUser.routes';
import { findAllUsersRoutes } from './findAllUsers.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/find', findUsersRoutes);
router.use('/update', updateUserRoutes);
router.use('/delete', deleteUserRoutes);
router.use('/find-all', findAllUsersRoutes);

export { router };
