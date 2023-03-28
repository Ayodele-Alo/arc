export type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface AlertTableI {
  date: string;
  name: string;
  year: string;
  difference: number;
  month: string;
  expiring_threshold: boolean;
}

export interface GenericI {
  [key: string]: string | number;
}
