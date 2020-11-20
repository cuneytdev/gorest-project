export interface UsersResponse {
  code: number;
  meta: Meta;
  data: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
  created_at: Date;
  updated_at: Date;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
}
