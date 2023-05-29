import {
  ContactosPage,
  InicioPage,
  ListaPreciosPage,
  VentasPage,
} from '@/pages';
import { AiOutlineHome } from 'react-icons/ai';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { RiContactsBookLine, RiPriceTag3Line } from 'react-icons/ri';

export const wholesaler: AllowedRoutes[] = [
  {
    to: '',
    path: '/*',
    text: 'Error 404',
    icon: 'ReactElement',
    element: <p>Error 404</p>
  },
  {
    to: '',
    path: '/',
    text: 'Inicio',
    icon: <AiOutlineHome />,
    element: <InicioPage />,
  },
  {
    to: 'contactos',
    path: '/contactos',
    text: 'Contactos',
    icon: <RiContactsBookLine />,
    element: <ContactosPage />,
  },
  {
    to: 'lista-de-precios',
    path: '/lista-de-precios',
    text: 'Lista de Precios',
    icon: <RiPriceTag3Line />,
    element: <ListaPreciosPage />,
  },
  {
    to: 'ventas',
    path: '/ventas',
    text: 'Ventas',
    icon: <MdShoppingCartCheckout />,
    element: <VentasPage />,
  },
];
