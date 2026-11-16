import {useAuthStore} from '@/stores/auth';

export function useUser(){

    const usuario = useAuthStore((state) => state.usuario);
    

    return{
        usuario,
        nome: usuario?.nome,
        primeiroNome: usuario?.nome.split(' ')[0],
        egimail: usuario?.email,
        isAdmin: usuario?.tipoUsuario === 'admin',
        isDonnor: usuario?.tipoUsuario === 'doador',
    }

}