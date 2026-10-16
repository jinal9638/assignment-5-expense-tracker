import React from 'react';
import { useExpenses } from './hooks/useExpenses';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseSummary } from './components/ExpenseSummary';
import { ExpenseFilters } from './components/ExpenseFilters';
import { ExpenseList } from './components/ExpenseList';
import './App.css';

export default function App() {
  const {
    expenses,
    totalSpending,
    addExpense,
    deleteExpense,
    filterCategory,
    setFilterCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  } = useExpenses();

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>Personal Expense Tracker</h2>
      </header>
      <main className="main-content">
        <section className="left-panel">
          <ExpenseSummary total={totalSpending} />
          <ExpenseForm onAddExpense={addExpense} />
        </section>
        <section className="right-panel">
          <ExpenseFilters
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </section>
      </main>
    </div>
  );
}