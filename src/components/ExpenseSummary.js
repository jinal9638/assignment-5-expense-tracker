import React from 'react';

export function ExpenseSummary({ total }) {
  return (
    <div className="summary-card">
      <h4>Total Expense</h4>
      <p className="summary-amount">₹{total.toFixed(2)}</p>
    </div>
  );
}