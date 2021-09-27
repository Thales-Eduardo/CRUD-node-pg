import { User } from '../../entities/User';
import { IPostgresRepository } from '../../repositories/methods/IPostgresRepository';

interface Request {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IPostgresRepository) {}

  public async execute({ name, email }: Request) {
    let user = new User();

    user = Object.assign({
      ...user,
      name,
      email,
    });

    await this.usersRepository.createUser(user);

    return user;
  }
}
