import React from 'react';

export function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="no-data">No transactions found.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((item) => (
        <li key={item.id} className="expense-item">
          <div className="item-details">
            <span className="item-title">{item.title}</span>
            <span className="item-meta">
              <span className="tag">{item.category}</span> • {item.date}
            </span>
          </div>
          <div className="item-actions">
            <span className="item-amount">₹{item.amount.toFixed(2)}</span>
            <button
              onClick={() => onDeleteExpense(item.id)}
              className="btn-delete"
              aria-label="Delete item"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}