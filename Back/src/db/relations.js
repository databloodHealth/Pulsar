import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
    doador: {
        usuario: r.one.usuario({
            from: r.doador.usuarioId,
            to: r.usuario.id
        }),
    },
    usuario: {
        doadores: r.many.doador(),
    },
}))