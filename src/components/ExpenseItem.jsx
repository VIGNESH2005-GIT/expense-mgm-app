function ExpenseItem(props) {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.getDate();

  return (
    <div className="expense-item">

      <div className="expense-date">
        <span>{month}</span>
        <span>{year}</span>
        <span>{day}</span>
      </div>

      <h2>{props.title}</h2>

      <div className="expense-amt">${props.amount}</div>

    </div>
  );
}

export default ExpenseItem;