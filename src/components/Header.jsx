import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div className='h-[80px] bg-orange-400 flex px-[20px] justify-between items-center'>
    <div className="h-[80px] flex px-[60px] justify-between items-center bg-gray-800 text-center text-gray-200 font-bold">
      <h1 className="text-[40px] font-[600]">Brand</h1>
      <ul className="flex gap-[30px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/kyc">Fill Form</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
