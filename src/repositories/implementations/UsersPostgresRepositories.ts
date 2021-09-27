import { Pool } from 'pg';
import { createConection } from '../../database/conection';

import { IPostgresRepository } from '../methods/IPostgresRepository';
import { IPostgresRepositoriesDTO } from '../dtos/IPostgresRepositoriesDTO';
import { AppErrors } from '../../errors/AppErrors';

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
}
