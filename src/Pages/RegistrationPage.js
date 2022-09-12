import styled from "styled-components";
import logo from "../Assets/logo.png";

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const RegisterUser = (event) => {
    event.preventDefault();
    const userRegisterObj = {
      name,
      email,
      password,
      confirmPassword
    }
    const response = axios.post('http://localhost:5000/register', userRegisterObj)
    response.then((res) => {
      alert('usuário criado com sucesso')
      navigate("/")
    }).catch((error) => {
      console.log(error.response);
    })
  }
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo"></img>
        </Logo>
        <form>
          <Input placeholder="nome" onChange={e => { setName(e.target.value) }}></Input>
          <Input placeholder="email" onChange={e => { setEmail(e.target.value) }}></Input>
          <Input placeholder="senha" type="password" onChange={e => { setPassword(e.target.value) }}></Input>
          <Input placeholder="confirme a senha" type="password" onChange={e => { setPasswordConfirm(e.target.value) }}></Input>
        </form>
        <Button onClick={RegisterUser}>Cadastrar</Button>
        <SignIn>
          <Link to='/'> Já tem uma conta? Entre agora!
          </Link>
        </SignIn>
      </Container>
    </>
  );
};

export default RegistrationPage;

const Container = styled.div`
  @media (max-width: 600px) {
    background-color: #8c11be;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border:none;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  width: 330px;
  height: 50px;
  margin-bottom: 10px;
  ::placeholder {
    padding: 0 20px;
  }
`;

const Button = styled.button`
  margin: 20px 0;
  width: 330px;
  height: 46px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  background-color: #a328d6;
`;

const SignIn = styled.p`
  a{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-decoration:none;
    }
`;
