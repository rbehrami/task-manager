import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createTask } from "../data/showalltasks.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const taskSchema = Yup.object().shape({
  taskTitle: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  taskDescription: Yup.string()
    .min(5, "Description must be at least 5 characters")
    .required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date cannot be before start date")
    .required("End date is required"),
  status: Yup.string().oneOf(["pending", "in progress", "completed"]),
  taskGiven: Yup.string().required("Task must be assigned to someone"),
});

const AddTaskForm = ({ onTaskCreated }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      taskTitle: "",
      taskDescription: "",
      startDate: "",
      endDate: "",
      status: "pending",
      taskGiven: "",
    },
  });


  const onSubmit = async (data) => {
    try {
      const newTask = await createTask(data);
      onTaskCreated?.(newTask);

      toast.success("Data is saved successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);

      reset();
    } catch (err) {
      toast.error(err.message || "Failed to create task");
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-bold mb-1 uppercase">
              Title
            </label>
            <input
              type="text"
              {...register("taskTitle")}
              placeholder="Task Title"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.taskTitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.taskTitle.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold mb-1 uppercase">
              Description
            </label>
            <textarea
              {...register("taskDescription")}
              placeholder="Task Description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.taskDescription && (
              <p className="text-red-500 text-xs mt-1">
                {errors.taskDescription.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1 uppercase">
                Start Date
              </label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.startDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold mb-1 uppercase">
                End Date
              </label>
              <input
                type="date"
                {...register("endDate")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.endDate && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.endDate.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1 uppercase">
                Status
              </label>
              <select
                {...register("status")}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold mb-1 uppercase">
                Task Given To
              </label>
              <input
                type="text"
                {...register("taskGiven")}
                placeholder="Type Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.taskGiven && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.taskGiven.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 cursor-pointer rounded-md transition"
          >
            {isSubmitting ? "Saving..." : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTaskForm;
