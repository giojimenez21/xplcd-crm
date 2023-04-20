import { UserEntity, UserWithRoleAndLocation } from "../interface";

export const toUserEntity = (user: UserWithRoleAndLocation, token: string):UserEntity => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    idLocation: user.idLocation!,
    nameLocation: user.location.name,
    idRole: user.idRole!,
    nameRole: user.role.name,
    isActive: user.isActive,
    isVerify: user.isVerify,
    token
})