import {
  ContactosPage,
  InicioPage,
  ListaPreciosPage,
  PuntosVentaPage,
} from '@/pages';
import { AiOutlineHome } from 'react-icons/ai';
import { TbShoppingBag } from 'react-icons/tb';
import { RiContactsBookLine, RiPriceTag3Line } from 'react-icons/ri';

export const warehouse: AllowedRoutes[] = [
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
    to: 'puntos-de-venta',
    path: '/puntos-de-venta',
    text: 'Puntos de Venta',
    icon: <TbShoppingBag />,
    element: <PuntosVentaPage />,
  },
];
