import { User } from '../../entities/User';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  id: string;
}

export class FindUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ id }: Request) {
    let user = new User();

    user = Object.assign({
      id,
    });

    await this.usersRepository.createUser(user);

    return user;
  }
}
