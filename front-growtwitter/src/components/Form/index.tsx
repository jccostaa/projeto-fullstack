import { useState } from "react";
import { Card, InputGroup, LoginCard, LoginForm, LoginWelcome, } from "./styles";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";


export function Form() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const { token, userId } = await login(formData.email, formData.senha)

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <LoginCard>
      <LoginWelcome>
        <h1>Growtwitter</h1>
        <p>Trabalho final do bloco intermediario</p>
        <p>O growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiencia familiar e boderosa, semelhante ao Twitter,
          mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressao, a conexão com pessoas de todo mundo e a disseminação de ideias.</p>
      </LoginWelcome>

      <LoginForm >
        <Card>
          <h2>Entrar no Growtwitter</h2>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </InputGroup>
            <InputGroup>
              <label htmlFor="password">Senha</label>
              <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} />
            </InputGroup>

            <InputGroup>
              <button type="submit">Entrar</button>
            </InputGroup>
          </form>
        </Card>
      </LoginForm>
    </LoginCard>
  )
}