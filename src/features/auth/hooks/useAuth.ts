import { useMutation } from '@tanstack/react-query';

import { loginUserService } from '../services';
import { useAuthStore } from './useAuthStore';

export const useAuth = () => {
  const { login, logout } = useAuthStore();

  const auth = useMutation(
    (params: ParamsForLogin) => loginUserService(params),
    {
      onSuccess: auth => login(auth),
      onError: () => logout,
    }
  );

  return auth;
}
