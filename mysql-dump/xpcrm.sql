-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-04-2023 a las 21:28:24
-- Versión del servidor: 8.0.32-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `xpcrm`
--
CREATE DATABASE IF NOT EXISTS `xpcrm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `xpcrm`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lists`
--

CREATE TABLE `lists` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locations`
--

CREATE TABLE `locations` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `locations`
--

INSERT INTO `locations` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Oficinas', '2023-04-24 20:11:13', '2023-04-24 20:11:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prices`
--

CREATE TABLE `prices` (
  `id` int NOT NULL,
  `price` float NOT NULL,
  `idProductsVariants` int NOT NULL,
  `idLists` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idBrand` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productsVariants`
--

CREATE TABLE `productsVariants` (
  `id` int NOT NULL,
  `idProduct` int NOT NULL,
  `idColor` int NOT NULL,
  `idTypeProduct` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'ADMIN', '2023-04-24 20:09:57', '2023-04-24 20:09:57'),
(2, 'WAREHOUSE', '2023-04-24 20:10:14', '2023-04-24 20:10:14'),
(3, 'SALESMAN', '2023-04-24 20:10:27', '2023-04-24 20:10:27'),
(4, 'WHOLESALER', '2023-04-24 20:10:57', '2023-04-24 20:10:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typeProduct`
--

CREATE TABLE `typeProduct` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `userName` varchar(45) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idLocation` int NOT NULL,
  `idRole` int NOT NULL,
  `isActive` tinyint NOT NULL,
  `isVerify` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prices_productsVariants1_idx` (`idProductsVariants`),
  ADD KEY `fk_prices_lists1_idx` (`idLists`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_brands1_idx` (`idBrand`);

--
-- Indices de la tabla `productsVariants`
--
ALTER TABLE `productsVariants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_productsVariants_products1_idx` (`idProduct`),
  ADD KEY `fk_productsVariants_colors1_idx` (`idColor`),
  ADD KEY `fk_productsVariants_typeProduct1_idx` (`idTypeProduct`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `typeProduct`
--
ALTER TABLE `typeProduct`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD KEY `fk_users_locations1_idx` (`idLocation`),
  ADD KEY `fk_users_roles1_idx` (`idRole`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productsVariants`
--
ALTER TABLE `productsVariants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `typeProduct`
--
ALTER TABLE `typeProduct`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `fk_prices_lists1` FOREIGN KEY (`idLists`) REFERENCES `lists` (`id`),
  ADD CONSTRAINT `fk_prices_productsVariants1` FOREIGN KEY (`idProductsVariants`) REFERENCES `productsVariants` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_brands1` FOREIGN KEY (`idBrand`) REFERENCES `brands` (`id`);

--
-- Filtros para la tabla `productsVariants`
--
ALTER TABLE `productsVariants`
  ADD CONSTRAINT `fk_productsVariants_colors1` FOREIGN KEY (`idColor`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `fk_productsVariants_products1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_productsVariants_typeProduct1` FOREIGN KEY (`idTypeProduct`) REFERENCES `typeProduct` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_locations1` FOREIGN KEY (`idLocation`) REFERENCES `locations` (`id`),
  ADD CONSTRAINT `fk_users_roles1` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
