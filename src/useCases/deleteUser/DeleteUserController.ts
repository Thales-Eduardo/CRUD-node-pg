import { Request, Response } from 'express';

import { DeleteUserUseCase } from './DeleteUserUseCase';
import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories';

const usersPostgresRepositories = new UsersPostgresRepositories();

export class DeleteUserController {
  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserUseCase = new DeleteUserUseCase(usersPostgresRepositories);

    await deleteUserUseCase.execute({ id });

    return res.status(204).send();
  }
}
