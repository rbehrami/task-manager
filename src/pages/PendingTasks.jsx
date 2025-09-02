import { useTaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';


const PendingTasks = () => {
  const { tasks, isLoading } = useTaskContext();
  const pendingTasks = tasks.filter(t => t.fields.status === 'pending');

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Pending Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingTasks.map(task => (
          <TaskCard key={task.sys.id} task={task} showEditButton />
        ))}
      </div>
    </div>
  );
};

export default PendingTasks;
