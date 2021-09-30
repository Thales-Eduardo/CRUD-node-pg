import { AppErrors } from '../../errors/AppErrors';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  id: string;
}

export class FindUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ id }: Request) {
    if (!id) {
      throw new AppErrors('Id inválido!');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppErrors('Usuário inválido!');
    }

    return user;
  }
}
