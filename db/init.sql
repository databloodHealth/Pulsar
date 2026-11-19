SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `estoque` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_sangue` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
  `quantidade` int DEFAULT '0',
  `status_tipos` enum('Estável','Moderado','Crítico') DEFAULT 'Crítico',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tipo_sangue` (`tipo_sangue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tipo_usuario` enum('admin','doador') NOT NULL DEFAULT 'doador',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `doador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `tipo_sanguineo` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `sexo` enum('masculino','feminino') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `telefone` (`telefone`),
  KEY `fk_usuario_id` (`usuario_id`),
  CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `usuario` (`email`, `senha`, `nome`, `tipo_usuario`) VALUES
  ('admin@pulsar.com', '$2b$10$ALOhUBG2WuK.A2Gv6CgW1eJquqahDAYHZdJDQjYrvLEZLgbYB3XfG', 'Administrador Pulsar', 'admin'),
  ('doador@pulsar.com', '$2b$10$eNIr72Z/9YqZqe1vfc51kerxJ83qvz/eq3kAC21FvEhBiz.cwJ77y', 'Doador Exemplo', 'doador');

INSERT IGNORE INTO `doador` (`usuario_id`, `cpf`, `telefone`, `data_nascimento`, `cidade`, `tipo_sanguineo`, `peso`, `sexo`)
SELECT `id`, '12345678900', '11999999999', '1990-05-20', 'São Paulo', 'O+', 72.50, 'masculino'
FROM `usuario` WHERE `email` = 'doador@pulsar.com';

INSERT IGNORE INTO `estoque` (`tipo_sangue`, `quantidade`, `status_tipos`) VALUES
  ('A+', 42, 'Estável'),
  ('A-', 13, 'Moderado'),
  ('B+', 31, 'Estável'),
  ('B-', 3, 'Crítico'),
  ('AB+', 13, 'Moderado'),
  ('AB-', 4, 'Crítico'),
  ('O+', 88, 'Estável'),
  ('O-', 14, 'Moderado');
