import React from "react";
import { ITask } from "@/types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))
          ) : (
            <tr>
              <td colSpan={2} className="p-3 text-center text-gray-500">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
