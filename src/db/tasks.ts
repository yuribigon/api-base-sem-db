import { Task } from "../models/task";

export let tasks: Task[] = [];

export const selectAllTasks = () => tasks;

export const deleteTaskByUuid = (uuidToRemove: string) => {
  const tasksUpdated = tasks.filter((task) => task.getUuid() !== uuidToRemove);
  if (tasks.length === tasksUpdated.length) {
    throw new Error("Tarefa não encontrada.");
  } else {
    tasks = tasksUpdated;
  }
};
