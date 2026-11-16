import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
	doador: {
		usuario: r.one.usuario({
			from: r.doador.usuarioId,
			to: r.usuario.id
		}),
	},
	usuario: {
		doadors: r.many.doador(),
	},
}))