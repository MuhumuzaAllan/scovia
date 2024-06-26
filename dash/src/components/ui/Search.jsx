import React from 'react'

const Search = () => {
  return (
    <div>
       <div className="flex flex-row relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
      </div>
      
    </div>  )
}

export default Search