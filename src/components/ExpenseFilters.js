import React from 'react';

export function ExpenseFilters({
  filterCategory,
  setFilterCategory,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date-desc">Newest First</option>
        <option value="date-asc">Oldest First</option>
        <option value="amount-high">Amount: High to Low</option>
        <option value="amount-low">Amount: Low to High</option>
      </select>
    </div>
  );
}