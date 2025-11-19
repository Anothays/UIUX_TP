
export interface ApiResponse<T> {
  data: T[];
  message: string;
}

export interface ApiResponseSingle<T> {
  data: T;
  message: string;
}