import { Router } from 'express';

import { usersRoutes } from './createUser.routes';

const router = Router();

router.use('/users', usersRoutes);

export { router };
