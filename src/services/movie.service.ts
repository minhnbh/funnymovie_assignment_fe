import { apiService } from "@utils/api.service";

export const MovieServices = {
  getMovies: () => apiService.get("/movie"),
};
