export type Uid = `${string}-${string}-${string}-${string}-${string}`;
export interface UserRequest {
  name: string;
  surname: string;
  companyName: string;
  email: string;
  password: string;
}

export interface User extends UserRequest {
  uid: Uid;
}
