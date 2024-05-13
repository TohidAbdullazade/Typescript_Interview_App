import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({input,setInput}) => {
 
  return (
    <header className="h-[60px] bg-red-300 w-full px-10 flex items-center ">
      <input
        type="text"
        className="w-[95%] outline-none h-[25px] px-2.5 rounded-md"
        placeholder="Search Element"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        className="border bg-blue-400 text-white rounded-md p-1  ml-2.5"
        type="button"
      >
        Search
      </button>
    </header>
  );
};

export default Header;
