import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';
import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories';

const usersPostgresRepositories = new UsersPostgresRepositories();

export class CreateUserController {
  public async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const createUser = new CreateUserUseCase(usersPostgresRepositories);

    const user = await createUser.execute({ name, email });

    return res.status(200).json(user);
  }
}
