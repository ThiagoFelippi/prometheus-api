import { IUserRepository } from "../../data/interfaces";
import { User } from "../../domain/entities";
import { MongoHelper } from "./mongo/mongo-helper";

// Logar quais metodos foram chamados, quantos usuarios encontrados, quanto demorou, etc.
export class UserRepository implements IUserRepository {
  public async findUsers(): Promise<User[]> {
    const userCollection = await MongoHelper.getCollection<User>("user");
    const users = userCollection.find();
    return users.toArray();
  }

  public async findUserByEmail(email: string): Promise<User> {
    const userCollection = await MongoHelper.getCollection<User>("user");
    const users = userCollection.findOne({ email });
    return users;
  }
}
