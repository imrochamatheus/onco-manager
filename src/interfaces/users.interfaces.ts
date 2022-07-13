interface IUserCreate {
  admin: boolean;
  name: string;
  email: string;
}

interface IUser extends IUserCreate {
  id: string;
}

export { IUser, IUserCreate };
