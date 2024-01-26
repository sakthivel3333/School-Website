-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dsrt
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `staff_details`
--

DROP TABLE IF EXISTS `staff_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_details` (
  `school_id` varchar(45) DEFAULT NULL,
  `staff_id` int NOT NULL,
  `staff_name` varchar(45) DEFAULT NULL,
  `staff_Address_door_no` varchar(45) DEFAULT NULL,
  `staff_Address_street` varchar(45) DEFAULT NULL,
  `staff_Address_district` varchar(45) DEFAULT NULL,
  `staff_Address_state` varchar(45) DEFAULT NULL,
  `staff_Address_pin_code` varchar(45) DEFAULT NULL,
  `staff_Address_country` varchar(45) DEFAULT NULL,
  `staff_mobile_no` varchar(10) DEFAULT NULL,
  `staff_dob` varchar(45) DEFAULT NULL,
  `staff_email` varchar(45) DEFAULT NULL,
  `staff_qualification` varchar(45) DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL,
  `date_of_releiving` date DEFAULT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `staff_id_UNIQUE` (`staff_id`),
  KEY `school_id_idx` (`school_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_details`
--

LOCK TABLES `staff_details` WRITE;
/*!40000 ALTER TABLE `staff_details` DISABLE KEYS */;
INSERT INTO `staff_details` VALUES ('001',1,'samuel','15','south street','tirunelveli','tamilnadu','627001','india','6385486187','19/06/2002','sam@gmail.com','B.TECH',NULL,NULL,'2024-01-20 14:19:24','2024-01-20 14:19:24'),('001',2,'akash','16','north street','tirunelveli','tamilnadu','627006','india','2','20/06/2002','akash@gmail.com','B.TECH',NULL,NULL,'2024-01-20 14:19:24','2024-01-20 14:19:24');
/*!40000 ALTER TABLE `staff_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-26 10:23:36
