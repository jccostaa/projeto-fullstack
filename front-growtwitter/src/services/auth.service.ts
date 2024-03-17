import { LoginResponse } from "../types/auth";
import api from "./api.service"

export async function login(email: string, senha: string): Promise<LoginResponse> {
    try {
        const response = await api.post('/login', { email: email, senha: senha })
        return response.data
    } catch (error) {
        throw new Error('Erro ao fazer login, email ou senha incorretos')
    }
}