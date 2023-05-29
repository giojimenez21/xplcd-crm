import { FC, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useAuthStore } from '@/features/auth/hooks';
import { router } from './routes';

const Router: FC = () => {
  const { user } = useAuthStore().auth!;

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router[user.role]} />
    </Suspense>
  )
}

export default Router;
