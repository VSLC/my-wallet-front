import styled from "styled-components";
const FinancePage = () => {
  return (
    <>
      <Container>
        <MainPage>
          <Header>
            <div>Olá , Fulano</div>
            <div>
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
          </Header>
          <Finance></Finance>
          <InAndOutDivs>
            <In>
              <ion-icon name="add-circle-outline"></ion-icon>
              <Text>
                Nova <br /> Entrada
              </Text>
            </In>
            <Out>
              <ion-icon name="add-circle-outline"></ion-icon>
              <Text>
                Nova <br /> Saída
              </Text>
            </Out>
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
  font-weigth: bold;
  justify-content: space-between;
`;

const Finance = styled.div`
  margin: 0 auto;
  width: 326px;
  height: 450px;
  background-color: #fff;
  border-radius: 5px;
`;

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
