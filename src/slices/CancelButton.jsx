import { useNavigate, useLocation } from "react-router-dom";

const CancelButton = ({ fallbackStatus = "pending" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    const returnPath = location.state?.from || getStatusPath(fallbackStatus);
    navigate(returnPath);
  };

  const getStatusPath = (status) => {
    switch (status) {
      case "completed":
        return "/dashboard/completedtasks";
      case "in progress":
        return "/dashboard/inprogress";
      default:
        return "/dashboard/pendingtasks";
    }
  };

  return (
    <button
      type="button"
      onClick={handleCancel}
      className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
    >
      Cancel
    </button>
  );
};

export default CancelButton;