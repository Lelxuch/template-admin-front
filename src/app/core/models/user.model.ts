export enum UserRoleEnum {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER'
}

export interface IUser {
  id?: number;
  username: string;
  fullName: string;
}

export interface IUserAuth {
  username: string;
  password: string;
}
