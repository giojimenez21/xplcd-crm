import { lazy } from 'react';

export const CompraPage = lazy(() => import('./compra/Compra.page'));
export const ContabilidadPage = lazy(() => import('./contabilidad/Contabilidad.page'));
export const ContactosPage = lazy(() => import('./contactos/Contacto.page'));
export const InicioPage = lazy(() => import('./inicio/Inicio.page'));
export const InventarioPage = lazy(() => import('./inventario/Inventario.page'));
export const ListaPreciosPage = lazy(() => import('./lista-de-precios/Lista-precios.page'));
export const PuntosVentaPage = lazy(() => import('./puntos-de-venta/Puntos-venta.page'));
export const VentasPage = lazy(() => import('./ventas/Ventas.page'));
