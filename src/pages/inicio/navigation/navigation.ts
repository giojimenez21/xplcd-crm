import { ReactElement } from 'react';
import {
  admin,
  salesman,
  warehouse,
  wholesaler
} from '@/features/auth/roles';

interface Link {
  to: string;
  text: string;
  icon: ReactElement;
}
export const navigation: Record<Roles, Link[]> = {
  ADMIN: admin.slice(1).map(route => ({
    icon: route.icon,
    text: route.text,
    to: route.to
  })),
  SALESMAN: salesman.slice(1).map(route => ({
    icon: route.icon,
    text: route.text,
    to: route.to
  })),
  WAREHOUSE: warehouse.slice(1).map(route => ({
    icon: route.icon,
    text: route.text,
    to: route.to
  })),
  WHOLESALER: wholesaler.slice(1).map(route => ({
    icon: route.icon,
    text: route.text,
    to: route.to
  })),
}
