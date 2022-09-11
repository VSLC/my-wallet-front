import styled from "styled-components";
import axios from 'axios';
import dayjs from 'dayjs';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MoneyOutPage = () => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const type = 'withdraw'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const moneyObj = {
      description,
      value,
      currentDay: dayjs().format('DD/MM'),
      type
    };

    const config = {
      headers: {
        'Authorization': `Bearer ${userInfo.token}`
      }
    };
    const response = axios.post('http://localhost:5000/moneyout', moneyObj, config);
    response.then(() => {
      navigate('/home');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  return (
    <>
      <Container>
        <Header>Nova Saída</Header>
        <form>
          <Input placeholder="Valor" onChange={e => setValue(e.target.value)}></Input>
          <Input placeholder="descrição" onChange={e => setDescription(e.target.value)}></Input>
        </form>
        <Button onClick={handleSubmit}>Nova Saída</Button>
      </Container>
    </>
  );
};

export default MoneyOutPage;

const Container = styled.div`
  @media (max-width: 600px) {
    background-color: #8c11be;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Header = styled.div`
  margin-top: 25px;
  margin-bottom: 40px;
  margin-right: 170px;
  color: #fff;
  display: flex;
  font-size: 26px;
  font-weight: bold;
  justify-content: flex-start;
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border:none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 326px;
  height: 50px;
  margin-bottom: 10px;
  ::placeholder {
    padding: 0 20px;
  }
`;
const Button = styled.button`
  margin: 20px 0;
  width: 326px;
  height: 46px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight : bold;
  font-size: 20px;

  background-color: #a328d6;
`;
