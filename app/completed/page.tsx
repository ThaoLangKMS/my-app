import Image from "next/image";
import { getAllTodos } from "@/api";
import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos);
  return (
    <div>
      {/* <ModeToggle /> */}
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Todo List</h1>
        </div>
        <TodoList tasks={todos.filter((todo) => todo.completed)} />
      </main>
    </div>
  );
}
