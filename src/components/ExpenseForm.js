import React from 'react';
import { useForm } from '../hooks/useForm';

const initialFormState = {
  title: '',
  amount: '',
  category: 'Food',
  date: new Date().toISOString().split('T')[0],
};

export function ExpenseForm({ onAddExpense }) {
  const { values, handleChange, resetForm } = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim() || !values.amount || values.amount <= 0) return;
    onAddExpense(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <h3>Add New Expense</h3>
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={values.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          step="0.01"
          value={values.amount}
          onChange={handleChange}
          required
        />
        <select name="category" value={values.category} onChange={handleChange}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-primary">
        Add Expense
      </button>
    </form>
  );
}