import { FC } from 'react';

import { ValidateAuthComponent, LoginComponent, VerifiedAccountComponent } from './components';
import { Router } from './router';
import { useAuthStore, useValidateSession } from './features/auth/hooks';

const Container: FC = () => {
  const { isLoading } = useValidateSession();
  const { auth } = useAuthStore();

  if (isLoading)
    return <ValidateAuthComponent />

  if (!auth)
    return <LoginComponent />

  if (!auth.user.isVerified)
    return <VerifiedAccountComponent />

  return <Router />
}

export default Container;
