import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative w-full ">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        className="flex w-full rounded-md border ml-auto bg-transparent px-4 py-5 placeholder:text-zinc-300 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-medium text-gray-400 text-xs "
        type="email"
        placeholder="Search for products, Brands, Markets & more"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <span className="absolute inset-y-0 end-0 grid w-12 place-content-center">
        <button type="button" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Search;
