DROP TABLE IF EXISTS `user_followings`;
CREATE TABLE `user_followings`(
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int(11) NOT NULL,
  `target_id` int(11) NOT NULL,
  UNIQUE KEY `user_id`(`user_id`),
  UNIQUE KEY `target_id`(`target_id`)
);