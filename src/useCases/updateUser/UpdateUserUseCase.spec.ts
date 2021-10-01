import { FakeUserRepositories } from '../../repositories/fakes/FakeUserRepositories';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { UpdateUserUseCase } from './UpdateUserUseCase';

import { AppErrors } from '../../errors/AppErrors';

let createUserUseCase: CreateUserUseCase;
let fakeUserRepositories: FakeUserRepositories;
let updateUserUseCase: UpdateUserUseCase;

describe('updateUserUseCase', () => {
  beforeEach(() => {
    fakeUserRepositories = new FakeUserRepositories();

    createUserUseCase = new CreateUserUseCase(fakeUserRepositories);
    updateUserUseCase = new UpdateUserUseCase(fakeUserRepositories);
  });

  it('Must be able to update user data.', async () => {
    const user = await createUserUseCase.execute({
      name: 'thales',
      email: 'thalesdev22@gmail.com',
    });

    const response = await updateUserUseCase.execute({
      id: user.id,
      name: 'thales22',
      email: 'thalesdev@gmail.com',
    });

    expect(response).toBe(undefined);
  });

  it('Not must be able to update user data.', async () => {
    await expect(
      updateUserUseCase.execute({ id: '', name: '', email: '' }),
    ).rejects.toBeInstanceOf(AppErrors);
    await expect(
      updateUserUseCase.execute({ id: 'fake', name: '', email: '' }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
