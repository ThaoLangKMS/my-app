import { ITodo } from "./types/todo";

const baseUrl='http://localhost:3001';

export const getAllTodos=async ():Promise<ITodo[]>=>{
    const res=await fetch(`${baseUrl}/todos`,{ cache: 'no-store' });
    const todos=await res.json();
    return todos;
}

export const addTodo=async (todo:ITodo):Promise<ITodo>=>{
    const res = await fetch(`${baseUrl}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      const newTodo = await res.json();
      return newTodo;
}

export const editTodo=async (todo:ITodo):Promise<ITodo>=>{
    const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      const updatedTodo = await res.json();
      return updatedTodo;
}

export const markCompletedTodo=async (todo:ITodo):Promise<ITodo>=>{
  const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo=async (id:number):Promise<void>=>{
    const res = await fetch(`${baseUrl}/todos/${id}`, {
        method: 'DELETE',
      })
}