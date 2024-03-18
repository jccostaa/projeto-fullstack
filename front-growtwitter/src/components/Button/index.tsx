import { ButtonStyled } from "./styles";

interface ButtonPrimaryProps {
    action?: () => void;
    type: "submit" | "button";
  }

const Button: React.FC<ButtonPrimaryProps> = ({ action, type }) => {
    return (
      <ButtonStyled type={type} onClick={action}>
        Tweetar
      </ButtonStyled>
    );
  };
  
  export default Button;