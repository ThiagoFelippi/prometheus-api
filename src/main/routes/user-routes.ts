import { Request, Response, Router } from "express";
import { Controller } from "../../presentation/interfaces";
import { findUserController } from "../factories";

export default (router: Router): void => {
  router.get("/users", adaptRoute(findUserController()));
};

function adaptRoute(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };

    const httpResponse = await controller.process(request);

    const isSuccessfulResponse =
      httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299;
    if (isSuccessfulResponse) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
}
