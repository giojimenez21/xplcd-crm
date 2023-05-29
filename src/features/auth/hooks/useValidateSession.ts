import { useQuery } from '@tanstack/react-query';

import { validateSession } from '@/features/auth/services';
import { useAuthStore } from './useAuthStore';

export const useValidateSession = () => {
  const { login, logout } = useAuthStore();

  const auth = useQuery<Auth>(
    ['auth'],
    () => validateSession(),
    {
      onSuccess: auth => login(auth),
      onError: () => logout,
      refetchOnWindowFocus: false,
      retry: false
    }
  );

  return auth;
};
