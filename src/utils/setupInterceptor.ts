import { ServiceSingletonType } from "./api.service";
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { getAccessToken } from "./authStorage";

const isGettingRefData = (url: string) => {
  return /refData/i.test(url);
};

export const handleResponseSuccess = (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  return Promise.resolve(response);
};

export const handleResponseFailure = async (
  error: AxiosError
): Promise<AxiosError | InternalAxiosRequestConfig | any> => {
  if (error.response?.status !== 401) return Promise.reject(error);
  const originalConfig = error.config;
  try {
    return Promise.resolve(originalConfig);
  } catch (e) {
    window.location.href = "/";
  }
};

export function handleRequestSuccess(
  this: ServiceSingletonType,
  config: any
): Promise<InternalAxiosRequestConfig> {
  const {
    url = "",
    headers: { Authorization: existingAuthorization },
  } = config;
  if (isGettingRefData(url)) {
    config.baseURL = process.env.PUBLIC_URL || "/";
  } else {
    config.baseURL =
      process.env.REACT_APP_API || "http://localhost:8080/api";
  }

  return Promise.resolve({
    ...config,
    headers: {
      ...config.headers,
      Authorization: existingAuthorization || `Bearer ${getAccessToken()}`,
    },
  });
}

export const handleRequestFailure = (error: AxiosError): Promise<Error> => {
  return Promise.reject(error.request);
};
