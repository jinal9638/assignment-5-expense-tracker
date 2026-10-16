# Personal Expense Tracker

A modern, responsive React web application built with Custom React Hooks and LocalStorage persistence to help users track, manage, and analyze their personal finances efficiently.

## Features

# Custom React Hooks:

useLocalStorage: Handles persistent state synchronization across browser reloads.

useForm: Encapsulates reusable form input management and resetting logic.

useExpenses: Manages core business logic, operations (add, delete), dynamic filtering, searching, and sorting.

Expense Tracking: Easily log expenses with details like title, amount, category, and date.

Real-time Metrics: Dynamic spending dynamic calculations (Total Outlay).

# Advanced Filtering & Search:

Filter transactions by category (Food, Transport, Utilities, Entertainment, Shopping, Other).

Live search filter by expense title.

Multi-criteria sorting (Newest/Oldest first, Amount High-to-Low / Low-to-High).

Responsive Design: Mobile-first grid and flexbox layout optimized across Desktop, Tablet, and Mobile screens.

## Tech Stack

Frontend: React.js (Hooks & Functional Components)

Styling: Modern CSS3 (CSS Variables, Flexbox, CSS Grid)

Storage: Browser LocalStorage API

Deployment Platform: Netlify / Vercel (Optional)

## Project Structure

Expense_Tracker_Jinal/
├── screenshots/
│   ├── desktop-view.png
│   ├── tablet-view.png
│   └── mobile-view.png
├── src/
│   ├── components/
│   │   ├── ExpenseFilters.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   └── ExpenseSummary.js
│   ├── hooks/
│   │   ├── useExpenses.js
│   │   ├── useForm.js
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── index.css
│   |── index.js
|   |── App.css
├── package.json
|── package-lock.json
└── README.md

# Deployment

This is depoloyment link:
[]