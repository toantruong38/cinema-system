export class Customer {
  id: number;
  account: string;
  password: string;
  fullName: string;
  birthday: string;
  idCard: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  user: User;
}
export class User {
  id:number;
  username:string;
  password:string;
  roles: [];
  status: boolean;
}
