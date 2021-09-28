import { Request, Response } from 'express';

import { UpdateUserUseCase } from './UpdateUserUseCase';
import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories';

const usersPostgresRepositories = new UsersPostgresRepositories();

export class UpdateUserController {
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const updateUserUseCase = new UpdateUserUseCase(usersPostgresRepositories);

    await updateUserUseCase.execute({ id, name, email });

    return res.status(200).json();
  }
}
