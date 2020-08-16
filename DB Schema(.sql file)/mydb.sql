-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2020 at 05:28 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `log_in`
--

CREATE TABLE `log_in` (
  `id` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `status` int(2) DEFAULT NULL,
  `fname` varchar(100) NOT NULL,
  `con` varchar(13) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_in`
--

INSERT INTO `log_in` (`id`, `username`, `status`, `fname`, `con`, `pass`) VALUES
(1, 'tanvir', 1, 'TANVIR TANJUM SHOURAV', '01515217823', '1234'),
(2, 'rahat', 2, 'RAHATUL MAKSUD', '01515217802', '1234'),
(4, 'jahin', 2, 'JAHIN ABRAR', '01515217000', '12345678'),
(5, 'aaa', 1, 'aaaa', '01515217824', '12345678'),
(7, 'shama', 1, 'Jarin Tasnim Shama', '01515217825', '12345678'),
(10, 'Ahmed12345', 1, 'Ahmed Ali', '01720014789', '123456789'),
(12, 'Customer1', 3, 'Customer', '01515214578', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `prod`
--

CREATE TABLE `prod` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` double(10,2) NOT NULL,
  `quant` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prod`
--

INSERT INTO `prod` (`id`, `name`, `price`, `quant`) VALUES
(1, 'Asus Rog', 100000.00, 2),
(3, 'Acer 10', 100200.00, 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log_in`
--
ALTER TABLE `log_in`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prod`
--
ALTER TABLE `prod`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log_in`
--
ALTER TABLE `log_in`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `prod`
--
ALTER TABLE `prod`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
