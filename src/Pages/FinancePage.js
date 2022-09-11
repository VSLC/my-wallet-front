import styled from 'styled-components';

import UserFinanceInputs from '../Components/UserFinanceInput'

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const financeInputs = [{ day: '22/05', description: 'jantar', price: -500.44 },
{ day: '22/05', description: 'almoço', price: 2000 },
{ day: '22/05', description: 'festa', price: 2000 }]

const FinancePage = () => {
  const [hasFinance, setHasFinance] = useState(true);
  const [arrayFinance, setArrayFinance] = useState([]);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo)
  const navigate = useNavigate()

  const config = {
    headers: {
      "Authorization": `Bearer ${userInfo.token}`
    }
  }

  const handleGetFinanceArray = () => {
    const response = axios.get('http://localhost:5000/home', config)
    response.then((res) => {
      setArrayFinance(res.data);
      if (res.data.length === 0) {
        setHasFinance(false);
      }
    }
    ).catch((error) => {
      console.log(error.message);
    })
  }

  useEffect(handleGetFinanceArray, [])

  const arrayFinanceTotalBalance = arrayFinance.map(financeElement => {
    if (financeElement.type === "withdraw") {
      return parseFloat(-financeElement.value)
    }
    return parseFloat(financeElement.value);
  })

  const totalBalance = arrayFinanceTotalBalance?.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0)

  const logOut = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <>
      <Container>
        <MainPage>
          <Header>
            <div>Olá , {userInfo.userName}</div>
            <div>
              <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
            </div>
          </Header>
          <Finance>
            <FinanceWrapper>
              {hasFinance ?
                arrayFinance.map((elementFinance, index) => <UserFinanceInputs key={index} day={elementFinance.currentDay} description={elementFinance.description} price={parseFloat(elementFinance.value)} type={elementFinance.type} />) : <p>Não há registros de entrada ou saída</p>}
            </FinanceWrapper>
            <TotalFinance totalBalance={totalBalance}>
              <p>SALDO</p>
              <p className="totalBalanceElement">{totalBalance}</p>
            </TotalFinance>
          </Finance>
          <InAndOutDivs>
            <Link to='/moneyin' style={{ textDecoration: "none" }}>
              <In>
                <ion-icon name="add-circle-outline"></ion-icon>
                <Text>
                  Nova <br /> Entrada
                </Text>
              </In>
            </Link>
            <Link to='/moneyout' style={{ textDecoration: "none" }}>
              <Out>
                <ion-icon name="add-circle-outline" ></ion-icon>
                <Text>
                  Nova <br /> Saída
                </Text>
              </Out>
            </Link>
          </InAndOutDivs>
        </MainPage>
      </Container>
    </>
  );
};

export default FinancePage;

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

const MainPage = styled.div`
  width: 375px;
`;

const Header = styled.div`
  padding: 0 30px;
  margin-top: 25px;
  margin-bottom: 20px;
  color: #fff;
  display: flex;
  font-size: 26px;
  font-weight: bold;
  justify-content: space-between;
`;

const Finance = styled.div`
  position: relative;
  overflow-y:scroll;
  position: relative;
  margin: 0 auto;
  width: 326px;
  height: 450px;
  background-color: #fff;
  border-radius: 5px;
  .paragraph {
    display: flex;
    background-color: red;
    justify-content: center;
    align-items:center;
    height: 450px;
  }
`;

const TotalFinance = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 326px;
    padding: 0 20px;
    display: flex;
    justify-content:space-between;
    p{
      color: #000;
      font-weight: bold;
      font-size:17px;
    }
    .totalBalanceElement{
      color: ${props => props.totalBalance >= 0 ? "green" : "red"};
    }
`;

const FinanceWrapper = styled.div`
  overflow-y:hidden;
  margin: 20px 0 100px 0;
`

const InAndOutDivs = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const In = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ion-icon {
    font-size: 30px;
    color: #fff;
  }
`;

const Out = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ion-icon {
    font-size: 30px;
    color: #fff;
  }
`;

const Text = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;