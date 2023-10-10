import { useState } from "react";
import Crud from "../components/Crud";
const HomePage = () => {
  const [displayData, setDisplayData] = useState(null);

  if (displayData) {
    return (
      <div
        className="bg-gray-200 text-center text-gray-800 font-bold flex flex-col gap-[50px] px-[60px]"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="flex justify-between items-center border-b border-gray-900">
          <h1 className="text-[40px] text-purple-400">Your details:</h1>
          <button
            className="px-[20px] py-[12px] font-semibold bg-red-500 rounded text-white"
            onClick={() => setDisplayData(null)}
          >
            Reset
          </button>
        </div>
        {/* user info */}
        <div className="flex">
          <div
            className="flex justify-start flex-col items-start gap-[10px] pl-[30px]"
            style={{ flex: 3 }}
          >
            <p>Name: {displayData.username}</p>
            <p>Email: {displayData.email}</p>
            <p>Gender: {displayData.gender}</p>
            <p>
              Habits:
              {displayData.habits.map((habit, i) => (
                <span key={i}>{habit}, </span>
              ))}
            </p>
            <p>Country: {displayData.country}</p>
            <p>Message: {displayData.msg}</p>
          </div>
          <div className="flex justify-center" style={{ flex: 1 }}>
            <div className="w-[200px] h-[200px] rounded-[50%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={displayData.imageReview}
                alt="user image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    //   <div className='bg-gray-800 text-center text-gray-300'>
    //   <h1 className='text-[40px] mb-6'>This is Home page.</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum beatae? Esse dolore qui unde exercitationem impedit soluta sapiente aspernatur reiciendis eos error repudiandae beatae facilis nisi, cumque accusantium quaerat tempore obcaecati est omnis consequuntur sit, quis quos. Iste necessitatibus consequuntur ipsam, repellat nostrum consequatur facilis explicabo commodi inventore itaque labore eos sit asperiores, odit nam? Nesciunt unde aspernatur, voluptates iste similique numquam veritatis debitis perferendis reprehenderit accusamus voluptas dignissimos iusto distinctio nisi eos sint obcaecati minima, itaque fugiat cumque atque rem odit quibusdam! Minima provident in saepe perferendis officia cumque, iusto architecto qui optio magni, quia molestiae ullam eius.</p>
    // </div>
    <>
      <Crud setDisplayData={setDisplayData} />
    </>
  );
};

export default HomePage;
