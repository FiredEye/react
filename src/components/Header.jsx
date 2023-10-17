import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div className='h-[80px] bg-orange-400 flex px-[20px] justify-between items-center'>
    <div className="h-[60px] flex px-[60px] justify-between items-center bg-gray-800 text-center text-gray-200 font-bold sticky top-0 z-[999]">
      <h1 className="text-[36px] font-[600]">Brand</h1>
      <ul className="flex gap-[30px]">
        <li>
          <Link to="/">Home</Link>  </li>

          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/top_rated">TopRated</Link></li>
          <li><Link to="/upcoming">Upcoming</Link></li>

      
      </ul>
    </div>
  );
};

export default Header;
