import { useNavigate } from "react-router-dom";
import { Box, Content, CustomContainer } from "./styles";

export default function WhatsHappening() {
    const navigate = useNavigate();
  
    return (
      <Content>
        <Box>
          <h3>O que está acontecendo?</h3>
          <CustomContainer>
            <small>Esportes - Há 45 min</small>
            <h4>Assunto sobre esportes</h4>
          </CustomContainer>
          <CustomContainer>
            <small>Assunto do Momento em Brasil</small>
            <h4>Assunto do Momento</h4>
          </CustomContainer>
          <CustomContainer>
            <small>Música - Assunto do Momento</small>
            <h4>Assunto sobre Música</h4>
          </CustomContainer>
          <CustomContainer>
            <small>Cinema - Assunto do Momento</small>
            <h4>Assunto sobre Filmes e Cinema</h4>
          </CustomContainer>
          <a onClick={() => navigate("/toexplore")}>Mostrar mais</a>
        </Box>
      </Content>
    );
  }