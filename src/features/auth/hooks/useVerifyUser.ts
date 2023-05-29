import { useMutation } from '@tanstack/react-query';

import { verifyUser } from '../services';

export const useVerifyUser = () => {
  const validateSession = useMutation(
    (params: ParamsForVerifyUser) => verifyUser(params),
    {
      onSuccess: () => location.reload(),
      onError: error => console.log(error)
    }
  );

  return validateSession;
}
