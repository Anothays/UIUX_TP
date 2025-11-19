
export interface ApiResponse<T> {
  data: T[];
  message: string;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
  }
}