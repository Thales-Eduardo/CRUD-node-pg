import { FakeUserRepositories } from '../../repositories/fakes/FakeUserRepositories';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { FindUserUseCase } from './FindUserUseCase';

import { AppErrors } from '../../errors/AppErrors';

let createUserUseCase: CreateUserUseCase;
let fakeUserRepositories: FakeUserRepositories;
let findUserUseCase: FindUserUseCase;

describe('deleteUserUseCase', () => {
  beforeEach(() => {
    fakeUserRepositories = new FakeUserRepositories();

    createUserUseCase = new CreateUserUseCase(fakeUserRepositories);
    findUserUseCase = new FindUserUseCase(fakeUserRepositories);
  });

  it('Must be able to list user by id', async () => {
    const user = await createUserUseCase.execute({
      name: 'thales',
      email: 'thalesdev22@gmail.com',
    });

    const response = await findUserUseCase.execute({ id: user.id });

    expect(response).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  it('Not must be able to list user by id', async () => {
    await expect(findUserUseCase.execute({ id: '' })).rejects.toBeInstanceOf(
      AppErrors,
    );
    await expect(findUserUseCase.execute({ id: 'not' })).rejects.toBeInstanceOf(
      AppErrors,
    );
  });
});
