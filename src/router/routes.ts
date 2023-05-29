import { createBrowserRouter } from 'react-router-dom';

import {
  admin,
  warehouse,
  salesman,
  wholesaler,
} from '@/features/auth/roles';

export const router: Record<Roles, any> = {
  ADMIN: createBrowserRouter(admin.map(route => ({
    path: route.path,
    element: route.element
  }))),
  WAREHOUSE: createBrowserRouter(warehouse.map(route => ({
    path: route.path,
    element: route.element
  }))),
  SALESMAN: createBrowserRouter(salesman.map(route => ({
    path: route.path,
    element: route.element
  }))),
  WHOLESALER: createBrowserRouter(wholesaler.map(route => ({
    path: route.path,
    element: route.element
  })))
};
