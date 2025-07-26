import { Outlet } from "react-router-dom";
import DashboradNavbar from "./Pages/Dashboard/DashboardNavbar/DashboradNavbar";


const Dashboard = () => {
    return (
        <div>
            <DashboradNavbar></DashboradNavbar>
            <div className="m-5 md:m-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;