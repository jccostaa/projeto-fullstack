import { Usuario } from "./usuario"

export interface Tweet{
    id:string
    userId:string
    conteudo:string
    usuario:Usuario
    likes:number
}