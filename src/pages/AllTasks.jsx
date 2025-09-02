import { useTasks } from '../data/tasks.query';
import { truncateText } from '../utils/truncate';

const TasksBoard = () => {
  const { data: TaskManager = [], isLoading, isError, error } = useTasks();

  const formatDate = (dateString) =>
    dateString
      ? new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
      : "No date set";

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <main className="p-4">

      <h1 className="text-3xl font-bold mb-6">All Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TaskManager.map(({ sys, fields }) => (
          <div key={sys.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center bg-indigo-100 py-4 px-3 rounded-xl mb-4">
              <h2 className="font-bold text-lg text-indigo-800">{fields.taskTitle}</h2>
            </div>

            <p className="text-gray-700 mb-4 text-center">{truncateText(fields.taskDescription, 60)}</p>

            <div className="flex justify-between text-sm mb-4">
              <div>
                <p className="font-bold text-gray-600">Start</p>
                <p>{formatDate(fields.startDate)}</p>
              </div>
              <div>
                <p className="font-bold text-gray-600">End</p>
                <p>{formatDate(fields.endDate)}</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-4">
              <span
                className={`px-3 py-1 rounded text-white text-sm font-medium ${
                  fields.status === "pending"
                    ? "bg-yellow-500"
                    : fields.status === "in progress"
                    ? "bg-blue-500"
                    : "bg-green-500"
                }`}
              >
                {fields.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TasksBoard;
