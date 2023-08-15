export type Uid = `${string}-${string}-${string}-${string}-${string}`;

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  name: string;
  surname: string;
  companyName: string;
}

export interface User extends UserRegister {
  uid: Uid;
}
