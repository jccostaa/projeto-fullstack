import { Tweet } from "../types/tweet";
import api from './api.service'

export async function getTweets(userId: string, token:string):Promise<Tweet[]>{
    try{
        const response = await api.get(`http://localhost:3333/usuarios/${userId}/tweets`,{
            headers:{
                Authorization: token
            }
        })
        return response.data.data
    }catch(error){
        throw Error("erro ao carregar tweets")
    }
}