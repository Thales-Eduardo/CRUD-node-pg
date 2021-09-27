import { Request, Response } from 'express';

import { FindUserUseCase } from './FindUserUseCase';
import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories';

const usersPostgresRepositories = new UsersPostgresRepositories();

export class FindUserController {
  public async create(req: Request, res: Response) {
    const { id } = req.params;

    const createUser = new FindUserUseCase(usersPostgresRepositories);

    const user = await createUser.execute({ id });

    return res.status(200).json(user);
  }
}
