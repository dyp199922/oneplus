# Host: localhost  (Version: 5.7.26)
# Date: 2020-07-02 16:00:54
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `goodsName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `typeId` varchar(255) CHARACTER SET utf8 NOT NULL,
  `goodsPrice` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `goodsCount` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goodsDesc` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goodsImg` varchar(255) CHARACTER SET utf8 NOT NULL,
  `beiyong1` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong2` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong3` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong4` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong5` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong6` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong7` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong8` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong9` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong10` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong11` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong12` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `beiyong13` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('10001','OnePlus 7 Pro','001','¥3,699.00','','随机购买配件，立享优惠','../imgs/23.png','星雾蓝 8GB+256GB','曜岩灰 8GB+256GB','../imgs/31.png','../imgs/32.png','../imgs/33.png','../imgs/34.png','../imgs/35.png','¥ 1261.36 起 x 3 期','¥ 644.24 起 x 6 期','¥ 331.37 起 x 12 期','含服务费','',''),('10002','OnePlus 8 Pro','001','¥5,399.00','','购机送银耳2T+保护壳，价值218元','../imgs/24.png','青空 8GB+128GB','黑镜 12GB+256GB','../imgs/36.png','../imgs/37.png','../imgs/38.png','../imgs/39.png','../imgs/40.png','¥ 1799.67 起 x 3 期','¥ 899.83 起 x 6 期','¥ 449.92 起 x 12 期','无手续费','',''),('10003','OnePlus 7T Pro','001','¥ 3999.00','','分期乐支付3期免息','../imgs/26.png','海月蓝 8GB+256GB','曜岩灰 12GB+256GB','../imgs/41.png','../imgs/42.png','../imgs/43.png','../imgs/44.png','../imgs/45.png','¥ 1363.66 起 x 3 期','¥ 696.49 起 x 6 期','¥ 358.24 起 x 12 期','含手续费','',''),('10004','OnePlus 8','001','¥ 3999.00','','购机送银耳2T+保护壳，价值218元','../imgs/25.png','银翼 8GB+128GB','青空 12GB+256GB','../imgs/46.png','../imgs/47.png','../imgs/48.png','../imgs/49.png','../imgs/50.png','¥ 1333.00 起 x 3 期','¥ 666.50 起 x 6 期','¥ 333.25 起 x 12 期','无手续费','',''),('10005','OnePlus 7T','001','¥3,199.00','','分期乐3期免息','../imgs/27.png','冰际蓝 8GB+256GB','冰川银 8GB+256GB','../imgs/51.png','../imgs/52.png','../imgs/53.png','../imgs/54.png','../imgs/55.png','¥ 1090.86 起 x 3 期','¥ 557.16 起 x 6 期','¥ 286.58 起 x 12 期','含手续费','',''),('10006','OnePlus 7','001','¥2,999.00','','随机购买配件，立享优惠','../imgs/56.png','曜岩灰 6GB+128GB','曜岩灰 6GB+128GB','../imgs/56.png','../imgs57.png','../imgs/58.png','../imgs/59.png','../imgs/60.png','¥ 999.99 起 x 3 期','¥ 499.99起 x 6 期','¥ 249.99 起 x 12 期','无手续费','',''),('10007','OnePlus 6T','001','¥2,499.00','','随机购买配件，立享优惠','../imgs/61.jpg','亮瓷黑 6GB+128GB','电光紫 8GB+128GB','../imgs/61.jpg','../imgs62.jpg','../imgs/63.jpg','../imgs/64.jpg','../imgs/65.jpg','¥ 830.33 起 x 3 期','¥ 415.67 起 x 6 期','¥ 208.37 起 x 12 期','含手续费','',''),('10008','OnePlus 6','001','¥1,999.00','','分期乐3期免息','../imgs/66.jpg','琥珀红 6GB+128GB','月牙白 6GB+128GB','../imgs/66.jpg','../imgs/67.jpg','../imgs/68.jpg','../imgs/69.jpg','../imgs/70.jpg','¥ 666.66 起 x 3 期','¥ 333.33 起 x 6 期','¥ 166.66 起 x 12 期','含手续费','','');

#
# Structure for table "goodstype"
#

CREATE TABLE `goodstype` (
  `typeId` varchar(255) CHARACTER SET utf8 NOT NULL,
  `goodsType` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "goodstype"
#

INSERT INTO `goodstype` VALUES ('001','手机'),('002','手机壳');

#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userpass` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('11111111111','111'),('122222222222','222'),('12345678900','123456'),('12345678901','123456'),('13479246656','123456');
