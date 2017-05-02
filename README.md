# efko

### Dump MySQL

```
-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 03, 2017 at 12:37 AM
-- Server version: 5.6.35
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Efko`
--
CREATE DATABASE IF NOT EXISTS `Efko` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `Efko`;

-- --------------------------------------------------------

--
-- Table structure for table `resolves`
--

DROP TABLE IF EXISTS `resolves`;
CREATE TABLE IF NOT EXISTS `resolves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `problem` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `resolve` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `resolves`
--

INSERT INTO `resolves` (`id`, `problem`, `resolve`, `rate`) VALUES
(1, 'Промблема 1122', 'Решение 1122', 4),
(2, '12344', '123444', 5),
(3, '12345', 'hjkdsbf', NULL),
(4, '456789', 'sdfaio', 2),
(5, '123', '123', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `root` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_uindex` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `root`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 3),
(2, 'user1', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(3, 'user2', '81dc9bdb52d04dc20036dbd8313ed055', 2);
```
