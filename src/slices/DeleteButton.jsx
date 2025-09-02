import { useNavigate } from "react-router-dom";
import { deleteTask } from "../data/showalltasks.api";

const DeleteButton = ({ id, redirectPath = "/dashboard/pendingtasks", onSuccess }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const success = await deleteTask(id);
      if (success) {
        if (onSuccess) {
          onSuccess();
        } else {
          navigate(redirectPath);
        }
      } else {
        alert("Failed to delete the task.");
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="inline-block px-3 py-1 bg-red-500 text-white rounded hover:bg-blue-6000"
    >
      Delete Task
    </button>
  );
};

export default DeleteButton;
