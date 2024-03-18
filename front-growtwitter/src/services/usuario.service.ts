import { Usuario } from "../types/usuario";
import api from "./api.service"

export async function getUsuarios(): Promise<Usuario[]>{
    try {
        const response = await api.get('http://localhost:3333/usuarios')
        return response.data.data
    } catch (error) {
        throw Error("Erro ao listar usuarios")
    }
}