import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ onSidebarToggle }) => {

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onSidebarToggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
            ChatGPT Clone
          </h1>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;