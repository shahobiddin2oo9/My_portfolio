import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout";
import DebtsPage from "./pages/DebtsPage";
import HomePage from "./pages/HomePage";
import Transaction from "./pages/TransactionPage";

function App() {
  const [debts, setDebts] = useState([]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={<HomePage debts={debts} setDebts={setDebts} />}
          />
          <Route
            path="/debts"
            element={<DebtsPage debts={debts} setDebts={setDebts} />}
          />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
