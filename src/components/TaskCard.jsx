import { useState } from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { truncateText } from '../utils/truncate';

const TaskCard = ({ task, showEditButton = false }) => {
  const { deleteTask } = useTaskContext();
   const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "N/A");
  const getStatusColor = (s) =>
    s === "completed"
      ? "bg-green-500"
      : s === "in progress"
      ? "bg-blue-500"
      : "bg-yellow-500";

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(task.sys.id);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">{task.fields.taskTitle}</h3>
          {showEditButton && (
            <div className="flex gap-2">
              <Link
                to={`/dashboard/edit/${task.sys.id}`}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
              {/* <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                >
                  View
                </button> */}
            </div>
          )}
        </div>

          <div 
            className="bg-gray-50 py-3 mt-5 mb-5 rounded-xl shadow-md cursor-pointer transition-all hover:bg-gray-100 hover:shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <p className="mb-2 px-5 font-semibold text-gray-700">{truncateText(task.fields.taskDescription, 55)}</p>
          </div>
  
        
        <p className="mb-2">
          Status:{" "}
          <span
            className={`inline-block text-xs font-semibold rounded-full px-2 py-1 ${getStatusColor(
              task.fields.status
            )}`}
          >
            {task.fields.status}
          </span>
        </p>

        <p className="mb-4">Assigned To: {task.fields.taskGiven}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center bg-blue-50 p-3 rounded-lg">
            <div className="bg-blue-100 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase">
                Start Date
              </p>
              <p className="text-gray-800 font-bold">{formatDate(task.fields.startDate)}</p>
            </div>
          </div>

          <div className="flex items-center bg-green-50 p-3 rounded-lg">
            <div className="bg-green-100 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-xs uppercase">
                End Date
              </p>
              <p className="text-gray-800 font-bold">{formatDate(task.fields.endDate)}</p>
            </div>
          </div>
        </div>
      </div>

        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 text-white">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold pr-4">{task.fields.taskTitle}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white hover:bg-opacity-20"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {task.fields.taskDescription}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Status</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.fields.status)}`}>
                    {task.fields.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Assigned To</h3>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="text-gray-700">{task.fields.taskGiven}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-blue-700">Start Date</h3>
                  </div>
                  <p className="text-gray-800 font-medium pl-11">{formatDate(task.fields.startDate)}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-green-700">End Date</h3>
                  </div>
                  <p className="text-gray-800 font-medium pl-11">{formatDate(task.fields.endDate)}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
