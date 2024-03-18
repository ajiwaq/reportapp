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
-- Database: `broilerp_farm-report`
--

-- --------------------------------------------------------

--
-- Table structure for table `enrolled_farmers`
--

CREATE TABLE `enrolled_farmers` (
  `id` int(5) NOT NULL,
  `fname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `farm_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `farm_address` text COLLATE utf8_unicode_ci NOT NULL,
  `phone_no` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `farm_capacity` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `enrolled_farmers`
--

INSERT INTO `enrolled_farmers` (`id`, `fname`, `farm_name`, `state`, `farm_address`, `phone_no`, `email`, `farm_capacity`) VALUES
(1, 'ade', 'God Grace', 'oyo', 'Ilaaro', '8067485858', 'ade@gmail.com', '2000'),
(2, 'Adekunle', 'Adekunle farms', 'Oyo State', 'Ilaro, Oyo State.', '7067388688', 'adekunle@gmail.com', '5000');

-- --------------------------------------------------------

--
-- Table structure for table `farmer_report`
--

CREATE TABLE `farmer_report` (
  `id` int(5) NOT NULL,
  `farm_code` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `farm_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `bird_age` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `stock_size` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `weight` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `mortality` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `reply_status` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `prob_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `recommendation` text COLLATE utf8_unicode_ci NOT NULL,
  `attach_doc` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `farmer_report`
--

INSERT INTO `farmer_report` (`id`, `farm_code`, `farm_name`, `bird_age`, `stock_size`, `weight`, `mortality`, `comment`, `date`, `reply_status`, `prob_name`, `recommendation`, `attach_doc`) VALUES
(1, 'ola@josla.com', 'Afolabi', '20', '5000', '30', '60', 'Our birds are in good health, but FSR have not visited our farm since the first day of stocking.\r\n', '2019-02-01', 'yes', 'FSR not visiting Farm', 'We sincerely apologies for this, our FSR will visit your farm as soon as possible', '38956369'),
(2, 'ola@josla.com', 'God Grace', '18', '5000', '30', '60', 'We noticed that our birds are not eating the proportion of feed that is expected per day.\r\n', '3/2/2019 0:16:51', 'no', 'Feed Problem', 'Please expect our Vet. Doctor in your farm any moment from now. ', ''),
(3, 'alabajolaoye@gmail.com', 'Odidere', '42', '20000', '1.6', '5', 'We need  10 bags of finisher feed in Odidere farm ', '4/2/2019 16:35:31', 'no', 'Request for Feed', 'Your FSR will get in touch with you as soon as Possible.', ''),
(4, 'ola@josla.com', 'God grace', '22', '66', '2', '5', 'We noticed sign of a particular disease affecting some of our birds, which we have suceeded in isolating the affected bird. Please your assistance is urgently required in our farm.\r\n', '12/2/2019 1:6:32', 'yes', 'Goboro Issues', '', '42784744'),
(5, 'alabajolaoye@gmail.com', 'Gh', '23', '200', '1.2', '3', 'We are good', '14/2/2019 12:27:50', '', '', '', ''),
(6, 'alabajolaoye@gmail.com', 'Adigun farm', '23', '5000', '1.6', '3', 'We were having CRD, birds were sneezing heavily but we were able to salvage the situation', '14/2/2019 12:56:8', 'no', '', '', ''),
(9, 'ola@josla.com', 'Adekunle Farm', '20', '2000', '1.8', '2', 'We need broiler starter', '14/2/2019 16:44:29', 'no', '', '', ''),
(10, '08051007391', 'Ade', '32', '5000', '1.6', '2', 'Good condition', '15/2/2019 9:23:46', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `image_upload_table`
--

CREATE TABLE `image_upload_table` (
  `id` int(5) NOT NULL,
  `image_tag` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `image_path` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `replies_table`
--

CREATE TABLE `replies_table` (
  `id` int(5) NOT NULL,
  `prob_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `recommendation` text COLLATE utf8_unicode_ci NOT NULL,
  `attach_doc` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `level` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `level`, `password`, `name`) VALUES
(1, 'admin', 'administrator', '123', 'Mr Alaba');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enrolled_farmers`
--
ALTER TABLE `enrolled_farmers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `farmer_report`
--
ALTER TABLE `farmer_report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_upload_table`
--
ALTER TABLE `image_upload_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `replies_table`
--
ALTER TABLE `replies_table`
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
-- AUTO_INCREMENT for table `enrolled_farmers`
--
ALTER TABLE `enrolled_farmers`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `farmer_report`
--
ALTER TABLE `farmer_report`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `image_upload_table`
--
ALTER TABLE `image_upload_table`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `replies_table`
--
ALTER TABLE `replies_table`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
