/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50556
 Source Host           : localhost:3306
 Source Schema         : exchange

 Target Server Type    : MySQL
 Target Server Version : 50556
 File Encoding         : 65001

 Date: 31/12/2018 20:53:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `schoolname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `coursename` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `coursetime` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`coursename`) USING BTREE,
  INDEX `shoolname`(`schoolname`) USING BTREE,
  CONSTRAINT `shoolname` FOREIGN KEY (`schoolname`) REFERENCES `school` (`schoolname`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('zdxh', 'android', 'Friday');
INSERT INTO `course` VALUES ('zdxh', 'IBM', 'Thursday');
INSERT INTO `course` VALUES ('zdxh', 'IT项目管理', 'Monday');
INSERT INTO `course` VALUES ('zdxh', 'JavaEE', 'Monday');
INSERT INTO `course` VALUES ('zdxh', 'PHP', 'Friday');
INSERT INTO `course` VALUES ('zdxh', 'software test', 'Wednesday');

-- ----------------------------
-- Table structure for recommend
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `score` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `grade` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `recommend`(`name`) USING BTREE,
  CONSTRAINT `recommend` FOREIGN KEY (`name`) REFERENCES `student` (`name`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of recommend
-- ----------------------------
INSERT INTO `recommend` VALUES (1, 'pty', '460', '大3');
INSERT INTO `recommend` VALUES (2, 'cjh', '455', '大3');
INSERT INTO `recommend` VALUES (3, 'gpt', '450', '大3');
INSERT INTO `recommend` VALUES (7, '梅西', '0', '大一');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school`  (
  `schoolname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`schoolname`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('cambridge', 'England');
INSERT INTO `school` VALUES ('Oxford', 'England');
INSERT INTO `school` VALUES ('zdxh', 'china');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `score` int(10) NOT NULL,
  `major` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `grade` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `school` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `inschool` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (2, 'pty', 460, '软件工程', '大3', NULL, 'zdxh');
INSERT INTO `student` VALUES (3, 'cjh', 455, '软件工程', '大3', NULL, NULL);
INSERT INTO `student` VALUES (4, 'gpt', 450, '软件工程', '大3', NULL, NULL);
INSERT INTO `student` VALUES (16, 'lcy', 450, '软件工程', '大3', 'zdxh', NULL);
INSERT INTO `student` VALUES (17, 'cxm', 430, '软件工程', '大3', NULL, NULL);
INSERT INTO `student` VALUES (18, 'lc', 100, '软件工程', '大3', 'zdxh', NULL);
INSERT INTO `student` VALUES (20, 'zy', 460, '软件工程', '大3', NULL, NULL);
INSERT INTO `student` VALUES (21, 'oysl', 400, '软件工程', '大3', NULL, NULL);
INSERT INTO `student` VALUES (22, '梅西', 0, '足球', '大一', NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` int(11) NOT NULL,
  `usertype` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, 'aaa', 123, 'user');
INSERT INTO `user` VALUES (5, 'pty', 123456, 'institution');
INSERT INTO `user` VALUES (6, 'admin', 123456, 'admin');
INSERT INTO `user` VALUES (7, 'test', 123456, 'institution');
INSERT INTO `user` VALUES (8, 'zdxh', 123456, 'school');

SET FOREIGN_KEY_CHECKS = 1;
