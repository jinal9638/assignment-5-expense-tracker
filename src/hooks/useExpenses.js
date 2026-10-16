import { useState, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage('app_expenses', []);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: crypto.randomUUID(),
      amount: parseFloat(expense.amount),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredAndSortedExpenses = useMemo(() => {
    return expenses
      .filter((expense) => {
        const matchesCategory =
          filterCategory === 'All' || expense.category === filterCategory;
        const matchesSearch = expense.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'amount-high') return b.amount - a.amount;
        if (sortBy === 'amount-low') return a.amount - b.amount;
        if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
        return new Date(b.date) - new Date(a.date); // date-desc default
      });
  }, [expenses, filterCategory, searchQuery, sortBy]);

  const totalSpending = useMemo(() => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  }, [expenses]);

  return {
    expenses: filteredAndSortedExpenses,
    totalSpending,
    addExpense,
    deleteExpense,
    filterCategory,
    setFilterCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  };
}