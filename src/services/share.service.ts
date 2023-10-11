import { apiService } from "@utils/api.service";

export const ShareServices = {
  share: (url: string) => apiService.post("/movie/share", { url }),
};
