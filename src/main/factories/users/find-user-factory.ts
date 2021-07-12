import { FindUserController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/interfaces";
import { FindUsers } from "../../../data/services";
import { UserRepository } from "../../../infra/db/user-repository";

export function findUserController(): Controller {
  const userRepositoy = new UserRepository();
  const userService = new FindUsers(userRepositoy);
  return new FindUserController(userService);
}
