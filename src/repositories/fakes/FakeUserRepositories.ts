import { v4 as uuid } from 'uuid';
import { User } from '../../entities/User';

import { IPostgresRepository } from '../methods/IPostgresRepository';
import { IPostgresRepositoriesDTO } from '../dtos/IPostgresRepositoriesDTO';

export class FakeUserRepositories implements IPostgresRepository {
  private users: User[] = [];

  public async createUser(data: IPostgresRepositoriesDTO): Promise<void> {
    const user = new User();
    Object.assign(user, { id: uuid() }, data);
    this.users.push(user);
  }

  public async findById(idUser: string): Promise<User | null> {
    const findUser = this.users.find((user) => user.id === idUser);
    return findUser || null;
  }

  public async findAllUsers(
    limit: number,
    offset: number,
  ): Promise<any[] | null> {
    const findUser: any = this.users.find((user) => user);
    findUser.length = limit;
    return findUser || null;
  }

  public async update(data: User): Promise<unknown> {
    const findUser = this.users.findIndex((findUser) => findUser);
    this.users[findUser] = data;
    return data;
  }

  public async delete(id: string): Promise<void> {
    const produtoIndex = this.users.findIndex((users) => users.id === id);
    this.users.splice(produtoIndex, 1);
  }
}
