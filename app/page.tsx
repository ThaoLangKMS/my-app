import Image from "next/image";
import "./globals.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";
import ModeToggle from "./components/ModeToggle";

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos);
  return (
    <div>
      {/* <ModeToggle /> */}
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <AddTask />
        </div>
        <TodoList tasks={todos.filter((todo) => !todo.completed)} />
      </main>
    </div>
  );
}
