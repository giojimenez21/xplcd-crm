interface LoginUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  idLocation: number;
  nameLocation: string;
  idRole: number;
  nameRole: Roles;
  isActive: boolean;
  isVerify: boolean;
  token: string;
}