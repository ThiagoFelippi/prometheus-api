import { User } from "../../../domain/entities";

export interface IUserRepository {
  findUsers(): Promise<User[]>;
  findUserByEmail(email: string): Promise<User>;
}
