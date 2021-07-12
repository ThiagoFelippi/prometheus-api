import { HttpResponse } from "./http";

export interface Controller<T = any, B = any> {
  process(request?: T): Promise<HttpResponse<B>>;
}
