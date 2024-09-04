import { ITask } from "@/types/tasks";

const baseUrl = "http://localhost:3000";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" }); 

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


export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
  const newTodo = await res.json();
  return newTodo;
}

