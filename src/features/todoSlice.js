import { createSlice } from "@reduxjs/toolkit";
import { getTodos, setTodos } from "./localStorage";


const todoSlice=createSlice({
  name:'todoSlice',
  initialState:{
    todos:getTodos()
  },
  reducers:{
   addTodo:(state,action)=>{
    state.todos = [...state.todos, action.payload];
    setTodos(state.todos)
   },
   deleteTodo:(state,action)=>{
    
    state.todos = state.todos.filter(todo => todo.id !== action.payload);
     
    setTodos(state.todos)
   },
   updateTodo:(state,action)=>{
    state.todos=state.todos.map(todo=>(todo.id === action.payload.id ? action.payload: todo));
    setTodos(state.todos)
   }
  }
})

export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions;

export default todoSlice.reducer;