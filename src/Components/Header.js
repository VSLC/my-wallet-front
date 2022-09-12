import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const HeaderUser = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const navigate = useNavigate();


    const logOut = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <Header>
            <div>Olá , {userInfo.userName}</div>
            <div>
                <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
            </div>
        </Header>
    );
}

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
export default HeaderUser