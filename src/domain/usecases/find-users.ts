import { User } from "../entities";

export interface IFindUsers {
  process(email?: string): Promise<User | User[]>;
}
