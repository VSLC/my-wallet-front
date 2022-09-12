import styled from "styled-components";
import logo from "../Assets/logo.png";

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const navigate = useNavigate()

  const userLogin = () => {
    let user = {
      email,
      password
    }
    const response = axios.post('http://localhost:5000/', user);
    response.then((res) => {
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      navigate('/home');

    }
    ).catch((error) => { console.log(error) })
  }
  return (
    <>
      <Container>
        <Logo>
          <img src={logo} alt="logo"></img>
        </Logo>
        <Form>
          <Input placeholder="email" onChange={(e) => setUserEmail(e.target.value)}  ></Input>
          <Input placeholder="senha" type="password" onChange={(e) => setUserPassword(e.target.value)} ></Input>
          <Button onClick={userLogin}>
            Entrar
          </Button>
        </Form>
        <SignUp>
          <Link to='/register'>Primeira vez? Cadastre-se!
          </Link>
        </SignUp>
      </Container>
    </>
  );
};

export default LoginPage;

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

const Form = styled.div`
`

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
  font-weight: bold;
  font-size: 20px;
  text-decoration:none;
  color: #fff;

  background-color: #a328d6;
`;

const SignUp = styled.p`
  a{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
  
`;
