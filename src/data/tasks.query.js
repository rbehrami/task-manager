import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllTasks, createTask, updateTask, deleteTask } from './showalltasks.api';

// Fetch all tasks
export const useTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getAllTasks,
    staleTime: 1000 * 60, // 1 minute cache
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] }); // Refresh tasks
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
