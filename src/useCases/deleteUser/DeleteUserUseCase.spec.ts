import { FakeUserRepositories } from '../../repositories/fakes/FakeUserRepositories';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { DeleteUserUseCase } from './DeleteUserUseCase';

import { AppErrors } from '../../errors/AppErrors';

let createUserUseCase: CreateUserUseCase;
let fakeUserRepositories: FakeUserRepositories;
let deleteUserUseCase: DeleteUserUseCase;

describe('deleteUserUseCase', () => {
  beforeEach(() => {
    fakeUserRepositories = new FakeUserRepositories();

    createUserUseCase = new CreateUserUseCase(fakeUserRepositories);
    deleteUserUseCase = new DeleteUserUseCase(fakeUserRepositories);
  });

  it('Must be able to delete a user', async () => {
    const user = await createUserUseCase.execute({
      name: 'thales',
      email: 'thalesdev22@gmail.com',
    });

    const response = await deleteUserUseCase.execute({ id: user.id });
    expect(response).toBe(undefined);
  });

  it('Not must be able to delete a user', async () => {
    await expect(deleteUserUseCase.execute({ id: '' })).rejects.toBeInstanceOf(
      AppErrors,
    );
    await expect(
      deleteUserUseCase.execute({ id: 'not' }),
    ).rejects.toBeInstanceOf(AppErrors);
  });
});
