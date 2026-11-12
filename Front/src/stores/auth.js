import { create } from "zustand";
import { persist } from "zustand/middleware";
import { logar } from "@/services/auth";


export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            usuario: null,
            login: async (email, senha) => {
                const {data} = await logar(email, senha);
                set({token: data.token, usuario: data.usuario});
                return data.usuario
            },
            logout: () => set({token:null, usuario:null})
        }),
        {name: 'auth-pulsar'}
    )
)
