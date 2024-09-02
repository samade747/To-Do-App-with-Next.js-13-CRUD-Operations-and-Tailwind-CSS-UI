import React from "react";
import { ITask } from "@/types/tasks";

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
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="p-3">{task.id}</td>
                <td className="p-3">{task.text || "No Description"}</td> {/* Handle empty text */}
              </tr>
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
