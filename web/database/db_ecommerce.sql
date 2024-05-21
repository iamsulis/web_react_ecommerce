-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2024 at 01:56 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(18, '2023_09_25_205721_create_ecommerce', 1);

-- --------------------------------------------------------

--
-- Table structure for table `table_category`
--

CREATE TABLE `table_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `table_category`
--

INSERT INTO `table_category` (`id`, `name`, `photo`) VALUES
(1, 'Laptop', 'laptop.webp'),
(2, 'Handphone', 'handphone.webp'),
(3, 'SSD Sata', 'ssd.webp'),
(4, 'VGA', 'vga.webp'),
(5, 'Mouse', 'mouse.webp'),
(6, 'Router', 'router.webp'),
(7, 'SD Card', 'sd_card.webp'),
(8, 'Card Reader', 'card_reader.webp');

-- --------------------------------------------------------

--
-- Table structure for table `table_item`
--

CREATE TABLE `table_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_toko` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `table_item`
--

INSERT INTO `table_item` (`id`, `name`, `description`, `price`, `stock`, `category`, `photo`, `id_toko`, `created_at`, `updated_at`) VALUES
(1, '[FS] Logitech B175 Wireless Mouse', 'Mouse', '105.000', 10, '5', 'items/mouse_1.jpg', 3, NULL, NULL),
(2, 'UGREEN Mouse Wireless Silent Click Max 4000DPI 90545 - 90686', 'Mouse', '250.000', 10, '5', 'items/mouse_2.jpg', 3, NULL, NULL),
(3, 'UGREEN Mouse Gaming Wireless Silent Click 4000 DPI 2.4G Rechargeable - 90545', 'Mouse', '125.000', 10, '5', 'items/mouse_3.jpg', 3, NULL, NULL),
(4, 'iPhone 13 Garansi Resmi - 128GB, Midnight', 'HP', '10.200.000', 10, '2', 'items/hp_1.jpg', 1, NULL, NULL),
(5, 'Apple iPhone 15 Garansi Resmi', 'HP', '13.625.000', 10, '2', 'items/hp_2.jpg', 1, NULL, NULL),
(6, 'Apple iPhone 13 256GB 128GB 64GB Second Original Resmi iBox', 'HP', '7.450.000', 10, '2', 'items/hp_3.jpg', 1, NULL, NULL),
(7, 'USB Card Reader Type C & Micro USB 3 in 1 TF SD Card OTG', 'Card Reader', '36.500', 10, '8', 'items/card_reader_1.jpg', 4, NULL, NULL),
(8, 'UGREEN Card Reader OTG USB Type C dan USB A 3.0 Ke Micro SD TF 50706', 'Card Reader', '120.000', 10, '8', 'items/card_reader_2.jpg', 4, NULL, NULL),
(9, 'InGo card reader OTG 6 in 1 support USB, Type C, Micro USB, micro/SD', 'Card Reader', '40.000', 10, '8', 'items/card_reader_3.webp', 4, NULL, NULL),
(10, 'Lenovo ThinkPad T480s Intel Core i5/i7 8th Gen T480 Laptop Slim', 'Laptop', '2.500.000', 10, '1', 'items/laptop_1.webp', 5, NULL, NULL),
(11, 'Macbook Pro 2017 13\" Dual Core i5 8GB 128GB', 'Laptop', '6.199.000', 10, '1', 'items/laptop_2.webp', 5, NULL, NULL),
(12, 'Lenovo Yoga Chromebook C630 - i7 8th 16GB 128GB - lenovo yoga C630', 'Laptop', '4.000.000', 10, '1', 'items/laptop_3.jpg', 5, NULL, NULL),
(13, 'SSD V-GeN Solid State Drive V-GeN 128GB SATA 3 SSD SATA III VGEN - RESCUE 120GB', 'SSD Sata', '207.000', 10, '3', 'items/ssd_sata_1.jpg', 6, NULL, NULL),
(14, 'SSD EYOTA 128GB SATA III 2.5\" 6GB/S GARANSI RESMI', 'SSD Sata', '167.000', 10, '3', 'items/ssd_sata_2.jpg', 6, NULL, NULL),
(15, 'SAMSUNG - 870 QVO 8TB | SSD SATA 8TB MZ-77Q8T0BW', 'SSD Sata', '12.079.000', 10, '3', 'items/ssd_sata_3.jpg', 6, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `table_toko`
--

CREATE TABLE `table_toko` (
  `id` int(11) NOT NULL,
  `nama_toko` varchar(250) NOT NULL,
  `alamat_toko` text NOT NULL,
  `photo_toko` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_toko`
--

INSERT INTO `table_toko` (`id`, `nama_toko`, `alamat_toko`, `photo_toko`) VALUES
(1, 'Toko Handphone', 'Batam', 'toko/toko_1.jpg'),
(2, 'Toko Router', 'Batam', 'toko/toko_1.jpg'),
(3, 'Toko Mouse', 'Batam', 'toko/toko_1.jpg'),
(4, 'Toko Card Reader', 'Batam', 'toko/toko_2.jpg'),
(5, 'Toko Laptop', 'Batam', 'toko/toko_2.jpg'),
(6, 'Toko SSD Sata', 'Batam', 'toko/toko_2.jpg'),
(7, 'Toko VGA', 'Batam', 'toko/toko_3.jpg'),
(8, 'Toko SD Card', 'Batam', 'toko/toko_3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `table_ulasan`
--

CREATE TABLE `table_ulasan` (
  `id` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `ulasan` text NOT NULL,
  `bintang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_ulasan`
--

INSERT INTO `table_ulasan` (`id`, `id_barang`, `id_user`, `ulasan`, `bintang`) VALUES
(1, 1, 1, 'Ini barang bagus guys', 5),
(2, 1, 1, 'Ini barang bagus guys', 5);

-- --------------------------------------------------------

--
-- Table structure for table `table_user`
--

CREATE TABLE `table_user` (
  `id` int(11) NOT NULL,
  `name_user` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `photo_user` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_user`
--

INSERT INTO `table_user` (`id`, `name_user`, `username`, `password`, `photo_user`) VALUES
(1, 'Usnul Fikri', 'usnul', 'usnul', 'user/user_1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_category`
--
ALTER TABLE `table_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_item`
--
ALTER TABLE `table_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_toko`
--
ALTER TABLE `table_toko`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_ulasan`
--
ALTER TABLE `table_ulasan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `table_user`
--
ALTER TABLE `table_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `table_category`
--
ALTER TABLE `table_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `table_item`
--
ALTER TABLE `table_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `table_toko`
--
ALTER TABLE `table_toko`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `table_ulasan`
--
ALTER TABLE `table_ulasan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `table_user`
--
ALTER TABLE `table_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
