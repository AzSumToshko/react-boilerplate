import axiosInstance from "./instances/AxiosInstance";
import { AxiosRequestConfig, AxiosResponse } from "axios";

// Types for the fetchData function
interface FetchDataProps<TData, TParams> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: TData;
  params?: TParams;
  headers?: AxiosRequestConfig["headers"]; // Use AxiosRequestConfig type for headers
}

// Utility function to handle requests
const fetchData = async <TResponse, TData = unknown, TParams = unknown>({
  url,
  method,
  data,
  params,
  headers,
}: FetchDataProps<TData, TParams>): Promise<TResponse> => {
  const response: AxiosResponse<TResponse> = await axiosInstance({
    url,
    method,
    data,
    params,
    headers,
  });
  return response.data;
};

export const baseService = {
  get: <TResponse, TParams = unknown>(
    url: string,
    params?: TParams,
    headers?: AxiosRequestConfig["headers"]
  ) => fetchData<TResponse>({ url, method: "GET", params, headers }),

  post: <TResponse, TData, TParams = unknown>(
    url: string,
    data?: TData,
    params?: TParams,
    headers?: AxiosRequestConfig["headers"]
  ) => fetchData<TResponse>({ url, method: "POST", data, params, headers }),

  put: <TResponse, TData, TParams = unknown>(
    url: string,
    data?: TData,
    params?: TParams,
    headers?: AxiosRequestConfig["headers"]
  ) => fetchData<TResponse>({ url, method: "PUT", data, params, headers }),

  delete: <TResponse, TData = unknown, TParams = unknown>(
    url: string,
    data?: TData,
    params?: TParams,
    headers?: AxiosRequestConfig["headers"]
  ) => fetchData<TResponse>({ url, method: "DELETE", data, params, headers }),
};
