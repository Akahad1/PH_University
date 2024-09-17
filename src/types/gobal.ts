import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    success: boolean;
    message: string;
    stack: string;
  };
  status: number;
};
type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
export type TResponsRedux<T> = TResponse<T> & BaseQueryApi;

export type TQureyParam = {
  name: string;
  value: boolean | React.Key;
};
