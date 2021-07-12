import { User } from "../../domain/entities";
import { IFindUsers } from "../../domain/usecases/find-users";
import { IUserRepository } from "../interfaces";

export class FindUsers implements IFindUsers {
  constructor(private readonly userRepository: IUserRepository) {}

  public async process(email?: string): Promise<User | User[]> {
    if (email) {
      return this.userRepository.findUserByEmail(email);
    } else {
      return this.userRepository.findUsers();
    }
  }
}
