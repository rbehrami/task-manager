import { createContext, useContext } from 'react';
import { useTasks, useCreateTask, useUpdateTask, useDeleteTask } from '../data/tasks.query';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { data: tasks = [], isLoading, isError } = useTasks();
  const createMutation = useCreateTask();
  const updateMutation = useUpdateTask();
  const deleteMutation = useDeleteTask();

  const createTask = async (data) => await createMutation.mutateAsync(data);
  const updateTask = async ({ id, data }) => await updateMutation.mutateAsync({ id, data });
  const deleteTask = async (id) => await deleteMutation.mutateAsync(id);

  return (
    <TaskContext.Provider value={{ tasks, isLoading, isError, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
