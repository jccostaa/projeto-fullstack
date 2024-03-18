/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { BodyTimeline, Content, CustomContainer, Icons, Line, TweetContainer, TweetContent, UserImg, UserName } from "./styles";
import { useNavigate } from "react-router-dom";
import { Tweet } from "../../types/tweet";
import { getTweets } from "../../services/tweet.service";
import { getUsuarios } from "../../services/usuario.service";
import comment from "./../../assets/icone_responder.svg";
import like from "./../../assets/icone_curtir.svg";
import dog from "./../../assets/dog-face-icon.svg";
import { Usuario } from "../../types/usuario";

export function Timeline() {
    const navigate = useNavigate();

    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const token = localStorage.getItem("token") ?? "";
    const userId = localStorage.getItem('userId') ?? "";

    useEffect(() => {
        const fetchTweets = async () => {   
            if (!token) {
                navigate('/login');
                throw new Error("Token não encontrado.");
            }

            try {
                const tweets = await getTweets(userId, token);
                console.log(tweets)
                setTweets(tweets);
            } catch (error: any) {
                console.log(`Erro ao carregar tweets: ${error.message}`);
            }
        };

        const fetchUsers = async () => {
            try {
                const usuarios = await getUsuarios();
                console.log("Usuários obtidos:", usuarios);
                setUsuarios(usuarios);
            } catch (error: any) {
                console.log(`Erro ao carregar usuários: ${error.message}`);
            }
        };

        fetchTweets();
        fetchUsers();
    }, [navigate, token, userId]);

    
    return (
        <BodyTimeline>
            <h1>Página inicial</h1>
            <Line />
            <ul>
                {tweets.map(tweet => (
                    <li key={tweet.id}>
                        <TweetContainer>
                            <UserImg src={dog} />
                            <TweetContent>
                                <UserName>
                                    {usuarios.length > 0 && (
                                        <span>
                                            <strong>{usuarios.find(usuario => usuario.id === tweet.userId)?.nome}</strong>
                                        </span>
                                    )}
                                    {usuarios.length > 0 && (
                                        <span>
                                            @{usuarios.find(usuario => usuario.id === tweet.userId)?.nomeUsuario}
                                        </span>
                                    )}
                                </UserName>

                                <Content>{tweet.conteudo}</Content>
                                <CustomContainer>
                                    <Icons>
                                        <img
                                            src={comment}
                                            alt="Comment"
                                            style={{ marginRight: "3px" }}
                                        />
                                        <small>0</small>
                                    </Icons>
                                    <Icons>
                                        <img src={like} alt="" />
                                    </Icons>
                                </CustomContainer>
                            </TweetContent>
                        </TweetContainer>
                    </li>
                ))}
            </ul>
        </BodyTimeline>
    );
}
