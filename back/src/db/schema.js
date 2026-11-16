import { mysqlTable, mysqlSchema, int, varchar, date, mysqlEnum, decimal, timestamp, uniqueIndex, foreignKey } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const estoque = mysqlTable("estoque", {
	id: int().autoincrement().primaryKey(),
	tipoSangue: mysqlEnum("tipo_sangue", ["A+","A-","B+","B-","AB+","AB-","O+","O-"]).notNull(),
	quantidade: int().default(0),
	statusTipos: mysqlEnum("status_tipos", ["Estável","Moderado","Crítico"]).default("Crítico"),
},
(table) => [
	uniqueIndex("tipo_sangue").on(table.tipoSangue),
]);

export const usuario = mysqlTable("usuario", {
	id: int().autoincrement().primaryKey(),
	email: varchar({ length: 255 }).notNull(),
	senha: varchar({ length: 255 }).notNull(),
	nome: varchar({ length: 100 }).notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	tipoUsuario: mysqlEnum("tipo_usuario", ["admin","doador"]).default("doador").notNull(),
},
(table) => [
	uniqueIndex("email").on(table.email),
]);

export const doador = mysqlTable("doador", {
	id: int().autoincrement().primaryKey(),
	usuarioId: int("usuario_id").notNull().references(() => usuario.id),
	cpf: varchar({ length: 14 }).notNull(),
	telefone: varchar({ length: 20 }).notNull(),
	dataNascimento: date("data_nascimento").notNull(),
    cidade: varchar({ length: 100 }).notNull(),
	tipoSanguineo: mysqlEnum("tipo_sanguineo", ["A+","A-","B+","B-","AB+","AB-","O+","O-"]),
	peso: decimal({ precision: 5, scale: 2 }),
	sexo: mysqlEnum(["masculino","feminino"]),
},
(table) => [
	uniqueIndex("cpf").on(table.cpf),
	uniqueIndex("telefone").on(table.telefone),
]);
