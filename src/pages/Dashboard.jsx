import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Header from "../components/Header"
import { Outlet } from "react-router-dom";

const Dashboard =()=>{

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 pt-18">
                    <SideBar />
                    <main className="flex-1 px-20 bg-gray-100 ml-64 pb-20">
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Dashboard;