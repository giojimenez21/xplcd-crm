interface Auth {
  user: User;
  token: string;
}

interface ParamsForLogin {
  userName: string;
  password: string;
}

interface ParamsForVerifyUser {
  password: string;
  newPassword: string;
}