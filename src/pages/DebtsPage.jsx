import React from "react";
import Cards from "../components/card/Card";
import imgCold from "./comp_4.gif";
const DebtsPage = ({ debts, setDebts }) => {
  const handleDelete = (id) => {
    setDebts(debts.filter((debt) => debt.id !== id));
  };

  const handleEdit = (id, updatedDebt) => {
    setDebts(
      debts.map((debt) => (debt.id === id ? { ...debt, ...updatedDebt } : debt))
    );
  };

  return (
    <div className="container">
      <h1 className="h11">Debts</h1>
      <div className="cards">
        {debts.length > 0 ? (
          debts.map((debt) => (
            <Cards
              key={debt.id}
              {...debt}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <img className="imgCold" src={imgCold} alt="no img?" />
        )}
      </div>
    </div>
  );
};

export default DebtsPage;
