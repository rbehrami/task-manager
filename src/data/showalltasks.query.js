import {useQuery} from '@tanstack/react-query'
import { getAllTasks } from './showalltasks.api'

export const tasksKeys = {
    all: ['taskManager'],
}

export const useTasks = () => {
    return useQuery({
        queryKey: tasksKeys.all,
        queryFn: getAllTasks,
    });
};