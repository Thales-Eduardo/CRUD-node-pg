import { Router } from 'express';

import { usersRoutes } from './createUser.routes';
import { findUsersRoutes } from './findUser.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/find', findUsersRoutes);

export { router };
