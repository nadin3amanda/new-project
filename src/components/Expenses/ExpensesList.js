import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    let expensesContent = <p> NO expenses found </p>;
    
    if (props.items.length > 0) {
      expensesContent = 
}
return (
<ul className="expenses-list">
    props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
</ul>
);
export default ExpensesList;
