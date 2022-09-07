import GlobalStyle from "./GlobalStyle.js";

import LoginPage from "./Components/LoginPage.js";
import RegistrationPage from "./Components/RegistrationPage.js";
import MoneyInPage from "./Components/MoneyInPage.js";
import MoneyOutPage from "./Components/MoneyOutPage";
import FinancePage from "./Components/FinancePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/moneyin" element={<MoneyInPage />} />
          <Route path="/moneyout" element={<MoneyOutPage />} />
          <Route path="/finance" element={<FinancePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
