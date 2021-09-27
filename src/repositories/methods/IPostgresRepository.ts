import { User } from '../../entities/User';
import { IPostgresRepositoriesDTO } from '../dtos/IPostgresRepositoriesDTO';

export interface IPostgresRepository {
  createUser(data: IPostgresRepositoriesDTO): Promise<void>;
  findById(idUser: string): Promise<User>;
}
