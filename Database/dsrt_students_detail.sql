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
-- Table structure for table `students_detail`
--

DROP TABLE IF EXISTS `students_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_detail` (
  `school_id` int NOT NULL,
  `student_id` varchar(45) NOT NULL,
  `student_name` varchar(45) DEFAULT NULL,
  `address_student_door_no` varchar(45) DEFAULT NULL,
  `address_student_street` varchar(45) DEFAULT NULL,
  `address_student_district` varchar(45) DEFAULT NULL,
  `address_student_state` varchar(45) DEFAULT NULL,
  `address_student_pincode` varchar(45) DEFAULT NULL,
  `address_student_country` varchar(45) DEFAULT NULL,
  `student_mobile_no` varchar(45) DEFAULT NULL,
  `student_email` varchar(45) DEFAULT NULL,
  `Student_standard` varchar(45) DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_detail`
--

LOCK TABLES `students_detail` WRITE;
/*!40000 ALTER TABLE `students_detail` DISABLE KEYS */;
INSERT INTO `students_detail` VALUES (1,'1','Akash','12/b','Barani nagar','Tirunelveli','Tamilnadu','627001','india','9489416060','akash@gmail.com','9 A',NULL,'2024-01-20 14:20:10','2024-01-25 01:08:38'),(1,'787','Sam','12/a','Junction','Tirunelveli','Tamilnadu','627002','india','9872361516','sam@gmail.com','9 B',NULL,'2024-01-25 15:57:08','2024-01-25 15:57:08');
/*!40000 ALTER TABLE `students_detail` ENABLE KEYS */;
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
