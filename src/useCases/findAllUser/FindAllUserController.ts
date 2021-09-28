import { Request, Response } from 'express';

import { FindAllUserUseCase } from './FindAllUserUseCase';
import { UsersPostgresRepositories } from '../../repositories/implementations/UsersPostgresRepositories';

const usersPostgresRepositories = new UsersPostgresRepositories();

export class FindAllUserController {
  public async index(req: Request, res: Response) {
    const { take, skip = 1 } = req.query;

    const findAllUserUseCase = new FindAllUserUseCase(
      usersPostgresRepositories,
    );

    const user = await findAllUserUseCase.execute({ take, skip });

    return res.status(200).json(user);
  }
}
