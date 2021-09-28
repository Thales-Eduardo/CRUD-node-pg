import { Pool } from 'pg';
import { createConection } from '../../database/conection';
import { User } from '../../entities/User';

import { IPostgresRepository } from '../methods/IPostgresRepository';
import { IPostgresRepositoriesDTO } from '../dtos/IPostgresRepositoriesDTO';

export class UsersPostgresRepositories implements IPostgresRepository {
  private client: Pool;

  constructor() {
    createConection().then((client) => (this.client = client));
  }

  public async createUser({
    id,
    name,
    email,
  }: IPostgresRepositoriesDTO): Promise<void> {
    await this.client.query(
      'INSERT INTO USERS (ID, NAME, EMAIL) VALUES ($1, $2, $3)',
      [id, name, email],
    );
  }

  public async findById(idUser: string): Promise<User | null> {
    const { rows } = await this.client.query(
      'SELECT * FROM USERS WHERE ID = $1 LIMIT 1',
      [idUser],
    );

    if (rows.length > 0) {
      const { id, name, email, date } = rows[0];

      const user = {
        id,
        name,
        email,
        date,
      };

      return user;
    }

    return null;
  }

  public async update({
    id,
    name,
    email,
  }: IPostgresRepositoriesDTO): Promise<unknown> {
    return await this.client.query(
      'UPDATE USERS SET NAME = $1, EMAIL = $2 WHERE ID = $3',
      [name, email, id],
    );
  }

  public async delete(id: string): Promise<void> {
    await this.client.query('DELETE FROM USERS WHERE ID = $1', [id]);
  }
}
