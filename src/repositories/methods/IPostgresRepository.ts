import { IPostgresRepositoriesDTO } from '../dtos/IPostgresRepositoriesDTO';

export interface IPostgresRepository {
  createUser(data: IPostgresRepositoriesDTO): Promise<void>;
}
