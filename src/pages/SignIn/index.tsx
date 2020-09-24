import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <Input href="forgot">Esqueci minha senha</Input>
        <a href="Login">
          <FiLogIn />
          Criar Conta
        </a>
      </form>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
