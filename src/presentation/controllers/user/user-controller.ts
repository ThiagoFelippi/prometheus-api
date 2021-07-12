import { User } from "../../../domain/entities";
import { IFindUsers } from "../../../domain/usecases/find-users";
import { Controller, HttpResponse } from "../../interfaces";

export class FindUserController implements Controller<any, User[]> {
  constructor(private readonly userService: IFindUsers) {}

  public async process(): Promise<HttpResponse<User[]>> {
    const user = (await this.userService.process()) as User[];

    return {
      statusCode: 200,
      body: user,
    };
  }
}
