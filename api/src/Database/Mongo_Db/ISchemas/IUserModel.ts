export interface IUserModel {
  _id: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  photoUrl: string;
  typeUser: string;
  status: boolean;
  _doc?: object;
}
