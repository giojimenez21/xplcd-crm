import {
  CompraPage,
  ContabilidadPage,
  ContactosPage,
  InicioPage,
  InventarioPage,
  ListaPreciosPage,
  PuntosVentaPage,
  VentasPage,
} from '@/pages';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineInventory, MdOutlineSell, MdShoppingCartCheckout } from 'react-icons/md';
import { TbNumbers, TbShoppingBag } from 'react-icons/tb';
import { RiContactsBookLine, RiPriceTag3Line } from 'react-icons/ri';

export const admin: AllowedRoutes[] = [
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
    to: 'compra',
    path: '/compra',
    text: 'Compra',
    icon: <MdOutlineSell />,
    element: <CompraPage />,
  },
  {
    to: 'contabilidad',
    path: '/contabilidad',
    text: 'Contabilidad',
    icon: <TbNumbers />,
    element: <ContabilidadPage />,
  },
  {
    to: 'contactos',
    path: '/contactos',
    text: 'Contactos',
    icon: <RiContactsBookLine />,
    element: <ContactosPage />,
  },
  {
    to: 'inventario',
    path: '/inventario',
    text: 'Inventario',
    icon: <MdOutlineInventory />,
    element: <InventarioPage />,
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
  {
    to: 'ventas',
    path: '/ventas',
    text: 'Ventas',
    icon: <MdShoppingCartCheckout />,
    element: <VentasPage />,
  },
];
