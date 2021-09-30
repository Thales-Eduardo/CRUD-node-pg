import { FakeUserRepositories } from '../../repositories/fakes/FakeUserRepositories';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { FindAllUserUseCase } from './FindAllUserUseCase';

import { AppErrors } from '../../errors/AppErrors';

let createUserUseCase: CreateUserUseCase;
let fakeUserRepositories: FakeUserRepositories;
let findAllUserUseCase: FindAllUserUseCase;

describe('findAllUserUseCase', () => {
  beforeEach(() => {
    fakeUserRepositories = new FakeUserRepositories();

    createUserUseCase = new CreateUserUseCase(fakeUserRepositories);
    findAllUserUseCase = new FindAllUserUseCase(fakeUserRepositories);
  });

  it('Must be able to list all users', async () => {
    const user = await createUserUseCase.execute({
      name: 'thales',
      email: 'thalesdev22@gmail.com',
    });

    const users = await findAllUserUseCase.execute({ take: 1, skip: 1 });

    expect(users).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  it('Not Must be able to list all users', async () => {
    await expect(
      findAllUserUseCase.execute({ take: 1, skip: 1 }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
