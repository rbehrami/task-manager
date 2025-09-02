import { useTaskContext } from "../context/TaskContext";

const TasksSummary = ({ status }) => {
  const { tasks, isLoading } = useTaskContext();

  if (isLoading) return <p>Loading...</p>;

  // Filter tasks based on status prop
  const filteredTasks = status ? tasks.filter(t => t.fields.status === status) : tasks;

  const count = filteredTasks.length;

  // Set dynamic colors for statuses
  const statusColors = {
    pending: { bg: "bg-yellow-100", text: "text-yellow-800" },
    "in progress": { bg: "bg-blue-100", text: "text-blue-800" },
    completed: { bg: "bg-green-100", text: "text-green-800" },
    total: { bg: "bg-gray-200", text: "text-gray-800" },
  };

  const { bg, text } = statusColors[status || "total"];

  return (
    <div className={`${bg} p-4 rounded-xl shadow flex flex-col items-center`}>
      <h3 className={`text-sm font-semibold ${text} mb-2`}>
        {status ? `${status.charAt(0).toUpperCase() + status.slice(1)} Tasks` : "Total Tasks"}
      </h3>
      <p className={`text-2xl font-bold ${text}`}>{count}</p>
    </div>
  );
};

export default TasksSummary;
