import { useTasks } from '../data/showalltasks.query';

export const useFilteredTasks = (status) => {
  const { data: tasks, isLoading, error } = useTasks();
  
  const filteredTasks = tasks?.filter(task => {
    const taskStatus = task.fields.status?.['en-US'] || task.fields.status;
    return taskStatus.toLowerCase() === status.toLowerCase();
  }) || [];

  return { tasks: filteredTasks, isLoading, error };
};