import { AppErrors } from '../../errors/AppErrors';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  take: any;
  skip: any;
}

export class FindAllUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ take, skip }: Request): Promise<any[]> {
    const offset = (skip - 1) * take;
    const limit = take;

    const user = await this.usersRepository.findAllUsers(limit, offset);

    if (!user) {
      throw new AppErrors('Usuário inválido!');
    }

    return user;
  }
}
