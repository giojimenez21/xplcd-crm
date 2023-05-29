import { admin, salesman, warehouse, wholesaler } from '@/features/auth/roles';
import { router } from '@/router/routes';

interface Card {
  text: string;
  path: string;
}
export const cardList: Record<Roles, Card[]> = {
  ADMIN: admin.map(route => ({
    text: route.text,
    path: route.path
  })),
  SALESMAN: salesman.map(route => ({
    text: route.text,
    path: route.path
  })),
  WAREHOUSE: warehouse.map(route => ({
    text: route.text,
    path: route.path
  })),
  WHOLESALER: wholesaler.map(route => ({
    text: route.text,
    path: route.path
  })),
};
