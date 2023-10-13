import { json } from "react-router-dom"

export const setTodos=(todos)=>{
localStorage.setItem('todos', JSON.stringify(todos))
}


export const getTodos=()=>{
  const data =localStorage.getItem('todos')
  return data===null?[]:JSON.parse(data)
  }
