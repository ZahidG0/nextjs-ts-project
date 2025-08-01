"use client"
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSearch } from './SearchProvider';

const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="mb-4 flex items-center justify-between w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search...."
          className="border p-2 rounded outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-2xl w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="text-blue-500 text-3xl rounded-lg mr-2 bg-white p-2 hover:bg-gray-300 absolute right-0 top-1/2 transform -translate-y-1/2">
          <CiSearch />
        </button>
      </div>
      <button className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 text-2xl">
        Upload
      </button>
    </header>
  );
};

export default Header;