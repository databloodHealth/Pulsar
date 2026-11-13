ALTER TABLE `doador` DROP CONSTRAINT `fk_usuario_id`;--> statement-breakpoint
DROP INDEX `fk_usuario_id` ON `doador`--> statement-breakpoint
ALTER TABLE `doador` MODIFY COLUMN `tipo_sanguineo` enum('A+','A-','B+','B-','AB+','AB-','O+','O-');--> statement-breakpoint
ALTER TABLE `doador` MODIFY COLUMN `peso` decimal(5,2);--> statement-breakpoint
ALTER TABLE `doador` ADD `cidade` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `doador` ADD CONSTRAINT `doador_usuario_id_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`);