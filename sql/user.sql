/* You can of course use any name for the table */
CREATE TABLE IF NOT EXISTS `user` (
	  `id` int(11) NOT NULL AUTO_INCREMENT,
	  `firstname` varchar(256) NOT NULL,
	  `lastname` varchar(256) NOT NULL,
	  `email` varchar(256) NOT NULL,
	  `password` varchar(256) NOT NULL,
	  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	  PRIMARY KEY (`id`)
	) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=65 ;