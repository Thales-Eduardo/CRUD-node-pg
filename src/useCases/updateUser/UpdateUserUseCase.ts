import { AppErrors } from '../../errors/AppErrors';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  id: string;
  name: string;
  email: string;
}

export class UpdateUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ id, name, email }: Request): Promise<void> {
    if (!id) {
      throw new AppErrors('Id inválido!');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppErrors('Usuário inválido!');
    }

    await this.usersRepository.update({ id, name, email });
  }
}
