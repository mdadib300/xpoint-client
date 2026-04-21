import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {
        data: isAdmin = false,
        isPending: isAdminLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !loading, // prevents undefined API call
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${encodeURIComponent(user.email)}`);
                return res.data?.admin;
            } catch (err) {
                console.error("Admin check failed:", err);
                return false; // ✅ fallback safety
            }
        },
        staleTime: 5 * 60 * 1000, // ✅ cache for 5 minutes
        retry: 1, // ✅ avoid spamming server
    });

    return [isAdmin, isAdminLoading, isError, error];
};

export default useAdmin;