import { ITask } from "@/types/tasks";

const baseUrl = "http://localhost:3000";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`); 

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