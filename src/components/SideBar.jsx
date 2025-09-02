import { useAuth0 } from "@auth0/auth0-react";
import { BiTask } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";

import { TbProgress } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import {Link } from 'react-router-dom'
import LogOutButton from "../slices/LogOutButton";

const SideBar = () => {
    const {isAuthenticated} = useAuth0();
    
    return (

        <>   
            <aside className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-indigo-900 from-0% via-indigo-600 via- to-indigo-400 to- text-white p-4 ">
                <ul className="space-y-10">
                    <div className="flex items-center justify-center gap-2">
                        <BiTask /><span className="font-bold text-red-500">TASK MANAGER</span>
                    </div>
                    <li className=" mb-0">
                        <Link to='/dashboard' className="flex items-center gap-2 p-2 hover:bg-purple-900 rounded transition font-bold text-[18px]">
                            <MdDashboard />Dashboard
                        </Link>
                    </li>
                    
                        <li className="mb-0">
                        <Link to="/dashboard/alltasks" className="flex items-center gap-2 p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">
                            <FaTasks /> All Tasks
                        </Link>
                    </li>
                    <li className="mb-0">
                        <Link to="/dashboard/completedtasks" className="flex items-center gap-2 p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">
                            <MdCheckCircle /> Completed
                        </Link>
                    </li>
                    
                    <li className="mb-0">
                        <Link to='/dashboard/pendingtasks' className="flex items-center gap-2 p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">
                            <MdOutlinePendingActions /> Pending
                        </Link>
                    </li>
                        <li>
                        <Link to='/dashboard/inprogress' className="flex items-center gap-2 p-2 hover:bg-purple-900 rounded transition font-semibold text-[18px]">
                            <TbProgress /> In Progress
                        </Link>
                    </li>



                    {isAuthenticated && (
                    <li>
                        <LogOutButton />
                    </li>
                    )}
                </ul>
            </aside>
        </>
    )
}
export default SideBar;