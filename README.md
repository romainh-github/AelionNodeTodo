# todo
Gestion d'une todo-list client (jQuery)

git clone https://github.com/dacodemaniak/nodetodo

Install dependencies :

cd nodetodo
npm i


Create database from the script below :

Database - todos_repo

DROP TABLE IF EXISTS `todos`;

CREATE TABLE `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

Create SQL User :

User : todos_dba 
Password : admin

Then start server
$nodetodo> npm start
