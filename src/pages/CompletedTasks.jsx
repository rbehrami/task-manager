import { useTasks } from "../data/tasks.query";
import TaskCard from "../components/TaskCard";

const CompletedTasks = () => {
  const { data: tasks = [], isLoading, isError } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load tasks</p>;

  const completedTasks = tasks.filter(t => t.fields.status === "completed");

  return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Completed Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedTasks.map(task => (
            <TaskCard key={task.sys.id} task={task} showEditButton />
          ))}
        </div>
      </div>
    
  );
};

export default CompletedTasks;
