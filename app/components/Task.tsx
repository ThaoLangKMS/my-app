"use client";
import { ITodo } from "@/types/todo";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo, markCompletedTodo } from "@/api";

interface TaskProps {
  task: ITodo;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [tasktoEdit, setTaskToEdit] = useState<string>(task.task);
  const [completed, setCompleted] = useState<boolean>(task.completed);

  const handleEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      task: tasktoEdit,
      completed: task.completed,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: number): Promise<void> => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  const handleCompletedTask: FormEventHandler<HTMLFormElement> = async (e) => {
    await markCompletedTodo({
      id: task.id,
      task: task.task,
      completed: !task.completed,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  return (
    <tr
      key={task.id}
      className={`w-full ${task.completed ? "line-through" : ""}`}
    >
      <td>
        <input
          className="mr-2"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedTask}
        />
        {task.task}
      </td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={20}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleEditTodo}>
            <h3 className="font-bold text-lg text-center">Edit task</h3>
            <div className="modal-action">
              <input
                value={tasktoEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <button type="submit" className="btn">
                Update
              </button>
            </div>
          </form>
        </Modal>
        <GoTrash
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={20}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure to delete this task ?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
