import { useEffect, useState } from "react"
import UseApi from "./hook/UseApi"

function App() {
  const paragraphStyles = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
};
const [data,load,error]  =UseApi('https://www.themealdb.com/api/json/v1/1/categories.php')
if(load) return <div className="h-[100vh] w-full flex justify-center items-center"><h1 className=" mt-4 text-yellow-500 text-[40px]">Loading...</h1></div>
if(error) return<div className="h-[100vh] w-full flex justify-center items-center"><h1 className=" mt-4 text-red-500 text-center text-[40px]">Something went wrong...</h1></div>

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-purple-500 text-[40px] my-4">Available Dishes:</h1>
      {data && data.categories.map((cata, i) => {
        return <div key={cata.idCategory} className="flex justify-center items-center flex-col bg-gray-100 rounded mb-[30px] shadow-md p-[20px] w-[500px] gap-3">
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt="dish image" />
          <p className="overflow-hidden max-h-20 leading-5 text-ellipsis" style={paragraphStyles}>{cata.strCategoryDescription}</p>
        </div>
        

        
      })}

    </div>

  )
}

export default App
