import { ILoginArgs, IRegisterArgs } from "@interfaces";
import { apiService } from "@utils/api.service";

export const AuthServices = {
  login: (args: ILoginArgs) => apiService.post("/auth/login", args),
  register: (args: IRegisterArgs) => apiService.post("/auth/register", args),
};
