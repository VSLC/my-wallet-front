import styled from "styled-components";
const MoneyInPage = () => {
  return (
    <>
      <Container>
        <Header>Nova Entrada</Header>
        <form>
          <Input placeholder="Valor"></Input>
          <Input placeholder="descrição"></Input>
        </form>
        <Button>Nova Entrada</Button>
      </Container>
    </>
  );
};

export default MoneyInPage;

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
  font-weigth: bold;
  justify-content: flex-start;
`;
const Input = styled.input`
  display: flex;
  justify-content: center;
  bacground-color: #fff;
  color: #000;
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
  font-weigth: bold;
  font-size: 20px;

  background-color: #a328d6;
`;
