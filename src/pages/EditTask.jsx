import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateTask, useTasks } from "../data/tasks.query";
import CancelButton from "../slices/CancelButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tasks = [] } = useTasks();
  const updateTaskMutation = useUpdateTask();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    status: "pending",
    taskGiven: "",
  });


  useEffect(() => {
    const task = tasks.find((t) => t.sys.id === id);
    if (task) {
      const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
      };

      setFormData({
        taskTitle: task.fields.taskTitle || "",
        taskDescription: task.fields.taskDescription || "",
        startDate: formatDateForInput(task.fields.startDate),
        endDate: formatDateForInput(task.fields.endDate),
        status: task.fields.status || "pending",
        taskGiven: task.fields.taskGiven || "",
      });
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateTaskMutation.mutateAsync({
        id,
        data: {
          taskTitle: formData.taskTitle,
          taskDescription: formData.taskDescription,
          startDate: formData.startDate,
          endDate: formData.endDate,
          status: formData.status,
          taskGiven: formData.taskGiven,
        },
      });

      toast.success("Task updated successfully!");

      if (formData.status === "completed") navigate("/dashboard/completedtasks");
      else if (formData.status === "in progress") navigate("/dashboard/inprogress");
      else navigate("/dashboard/pendingtasks");
    } catch (error) {
      console.error("Failed to update task:", error);
      toast.error("Something went wrong while updating the task!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="p-4 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
            <input
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Task Title"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Description</label>
            <textarea
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Task Description"
              rows={5}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled={isSubmitting}
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
            <input
              name="taskGiven"
              value={formData.taskGiven}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Assigned To"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
            <CancelButton fallbackStatus={formData.status} />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditTask;
