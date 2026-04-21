import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    // ⏳ Wait until everything is ready
    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center my-25 md:my-50">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    // 🔐 Not logged in → go to login
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // ⛔ Not admin → go home
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    // ✅ Admin → allow access
    return children;
};

export default AdminRoute;