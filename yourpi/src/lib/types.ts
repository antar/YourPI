export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface IIntrospectResponse {
  message: "Access granted.";
  data: IUser;
}
