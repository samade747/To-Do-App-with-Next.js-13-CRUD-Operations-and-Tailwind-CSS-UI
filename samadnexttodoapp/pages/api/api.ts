import { ITask } from "@/types/tasks";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`http://localhost:3000/data/todos.json`); // Full URL

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      return data.tasks;
    } else {
      throw new Error("Unexpected content-type. Expected application/json");
    }
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw error; // Re-throw or handle appropriately
  }
};