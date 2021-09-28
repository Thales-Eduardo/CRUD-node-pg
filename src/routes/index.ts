import { Router } from 'express';

import { usersRoutes } from './createUser.routes';
import { findUsersRoutes } from './findUser.routes';
import { updateUserRoutes } from './updateUser.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/find', findUsersRoutes);
router.use('/update', updateUserRoutes);

export { router };
