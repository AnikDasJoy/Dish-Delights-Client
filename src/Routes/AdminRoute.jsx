import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useLocation, Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdimin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdimin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;