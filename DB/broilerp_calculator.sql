-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 07, 2019 at 12:00 PM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `broilerp_calculator`
--

-- --------------------------------------------------------

--
-- Table structure for table `farmers`
--

CREATE TABLE `farmers` (
  `id` int(20) NOT NULL,
  `farmer_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `farm_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `UserRegistrationTable`
--

CREATE TABLE `UserRegistrationTable` (
  `id` int(5) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `UserRegistrationTable`
--

INSERT INTO `UserRegistrationTable` (`id`, `name`, `email`, `password`) VALUES
(10, 'olawaola', 'olawale78040@gmail.com', '123'),
(9, 'ade', 'wale', '123'),
(8, 'luqman', 'olawale7040@gmail.com', '12345'),
(11, '', 'ola', '123'),
(12, '', 'fff', 'fff'),
(13, '', 'ade', 'wale');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'ade', '123'),
(2, 'olawale7040@gmail.com', 'ade'),
(3, 'adekunle', '12345'),
(4, 'natnudo@gmail.com', '123'),
(8, 'olawaiaaa@gmail.com', '123'),
(6, 'awarefaggd', '123'),
(9, 'ola@josla.com.ng', '123'),
(10, 'nas@joala.com.ng', '12345'),
(11, 'ade@dee', '22'),
(12, 'ola@josla.com', '123'),
(13, 'alabajolaoye@gmail.com', 'babalawo'),
(14, 'luku@gmial.com', '111'),
(15, '08068618485', 'Akintoye'),
(16, '08051007391', 'dada'),
(17, '08038568897', 'PROGRESS'),
(18, '08164832796', 'akinwumi'),
(19, '07069646276', '21041988ayoka'),
(20, '07035888045', 'abubakar'),
(21, '08063097947', 'Amofarms'),
(22, '07031177746', 'sewatola'),
(23, '07039429224', '07039429224');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `farmers`
--
ALTER TABLE `farmers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `UserRegistrationTable`
--
ALTER TABLE `UserRegistrationTable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `farmers`
--
ALTER TABLE `farmers`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `UserRegistrationTable`
--
ALTER TABLE `UserRegistrationTable`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
