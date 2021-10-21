import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expenses.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
let title = props.title;

  const clickHandler = () => {
    title = 'Updated!';
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__descirption">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card >
  );
}

export default ExpenseItem;
