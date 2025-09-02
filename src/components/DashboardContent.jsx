import TasksSummary from "../components/TasksSummary";
import {Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <button className="w-[150px] mt-10 bg-green-500 text-white  font-bold rounded-xl py-3">
         <Link to="/dashboard/addnewtask" >
        Add New Task
      </Link>
      </button>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <TasksSummary />
      <TasksSummary status="pending" />
      <TasksSummary status="in progress" />
      <TasksSummary status="completed" />
    </div>
    </>
  );
};

export default Dashboard;