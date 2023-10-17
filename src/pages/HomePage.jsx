import CategoryMovie from "./CategoryMovie";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const HomePage = () => {

  const location=useLocation();
useEffect(()=>{
  window.scrollTo(0,0)
},[location.pathname])
  return (<>
  <CategoryMovie/>
  </>
  );
};

export default HomePage;
