import { AppErrors } from '../../errors/AppErrors';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  id: string;
}

export class DeleteUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ id }: Request): Promise<void> {
    if (!id) {
      throw new AppErrors('Id inválido!');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppErrors('Usuário inválido!');
    }

    await this.usersRepository.delete(id);
  }
}
