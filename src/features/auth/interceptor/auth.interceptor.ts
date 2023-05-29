export const authInterceptor = (value: any): Auth => {
  const response: Auth = {
    token: value.token,
    user: {
      firstName: value.firstName,
      id: value.id,
      idLocation: value.idLocation,
      idRole: value.idRole,
      isVerified: value.isVerify,
      lastName: value.lastName,
      location: value.nameLocation,
      role: value.nameRole,
      userName: value.userName,
    }
  }
  return response;
}