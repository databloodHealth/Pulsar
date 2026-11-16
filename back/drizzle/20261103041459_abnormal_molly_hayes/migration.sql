-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `estoque` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`tipo_sangue` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
	`quantidade` int DEFAULT 0,
	`status_tipos` enum('Estável','Moderado','Crítico') DEFAULT 'Crítico',
	CONSTRAINT `tipo_sangue` UNIQUE INDEX(`tipo_sangue`)
);
--> statement-breakpoint
CREATE TABLE `usuario` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`nome` varchar(100) NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`tipo_usuario` enum('admin','doador') NOT NULL DEFAULT 'doador',
	CONSTRAINT `email` UNIQUE INDEX(`email`)
);
--> statement-breakpoint
CREATE TABLE `doador` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`usuario_id` int NOT NULL,
	`cpf` varchar(14) NOT NULL,
	`telefone` varchar(20) NOT NULL,
	`data_nascimento` date NOT NULL,
	`tipo_sanguineo` enum('A+','A-','B+','B-','AB+','AB-','O+','O-') NOT NULL,
	`peso` decimal(5,2) NOT NULL,
	`sexo` enum('masculino','feminino'),
	CONSTRAINT `cpf` UNIQUE INDEX(`cpf`),
	CONSTRAINT `telefone` UNIQUE INDEX(`telefone`)
);
--> statement-breakpoint
ALTER TABLE `doador` ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`);
*/