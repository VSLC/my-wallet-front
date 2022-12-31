import GlobalStyle from "./GlobalStyle.js";

import LoginPage from "./Pages/LoginPage.js";
import RegistrationPage from "./Pages/RegistrationPage.js";
import MoneyInPage from "./Pages/MoneyInPage.js";
import MoneyOutPage from "./Pages/MoneyOutPage";
import FinancePage from "./Pages/FinancePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/moneyin" element={<MoneyInPage />} />
          <Route path="/moneyout" element={<MoneyOutPage />} />
          <Route path="/home" element={<FinancePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
