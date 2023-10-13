import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo } from "../features/todoSlice";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [id,setId]=useState(null)
 
  const handleOpen = (id) => {
    setId(id);
    setOpen(!open);
  };
 
  const { todos } = useSelector((store) => store.todos);

  const dispatch = useDispatch(deleteTodo);
  const navigate = useNavigate();

  if (todos) {
    return (
      <div className="px-5">
        <h1 className="text-[40px] text-purple-400 my-[20px]">
          Users details:
        </h1>
        {todos.map((user) => (
          <div
            className="bg-gray-200 text-center text-gray-800 font-bold flex rounded mt-3 py-3"
            key={user.id}
          >
            <div
              className="flex justify-start flex-col items-start gap-[10px] pl-[30px]"
              style={{ flex: 1.5 }}
            >
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>
                Habits:
                {user.habits.map((habit, i) => (
                  <span key={i}>{habit}, </span>
                ))}
              </p>
              <p>Country: {user.country}</p>
              <p>Message: {user.msg}</p>
            </div>
            <div
              className="flex justify-start items-center gap-3"
              style={{ flex: 1 }}
            >
              <button
                className="px-[26px] py-[12px] rounded bg-red-500 text-white cursor-pointer"
                
                onClick={()=>handleOpen(user.id)}
              >
                Delete
              </button>
              <button
                className="px-[26px] py-[12px] rounded bg-orange-500 text-white cursor-pointer"
                onClick={() => navigate(`/kyc/${user.id}`)}
              >
                Update
              </button>
            </div>
            <div className="flex justify-center" style={{ flex: 1 }}>
              <div className="w-[200px] h-[200px] rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={user.imageReview}
                  alt="user image"
                />
              </div>
            </div>
          </div>
        ))}
         <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Delete User.</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={() => {dispatch(deleteTodo(id));setOpen(!open)}}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </div>
    );
  }
  return (
    //   <div className='bg-gray-800 text-center text-gray-300'>
    //   <h1 className='text-[40px] mb-6'>This is Home page.</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum beatae? Esse dolore qui unde exercitationem impedit soluta sapiente aspernatur reiciendis eos error repudiandae beatae facilis nisi, cumque accusantium quaerat tempore obcaecati est omnis consequuntur sit, quis quos. Iste necessitatibus consequuntur ipsam, repellat nostrum consequatur facilis explicabo commodi inventore itaque labore eos sit asperiores, odit nam? Nesciunt unde aspernatur, voluptates iste similique numquam veritatis debitis perferendis reprehenderit accusamus voluptas dignissimos iusto distinctio nisi eos sint obcaecati minima, itaque fugiat cumque atque rem odit quibusdam! Minima provident in saepe perferendis officia cumque, iusto architecto qui optio magni, quia molestiae ullam eius.</p>
    // </div>
    <>Hello</>
  );
};

export default HomePage;
