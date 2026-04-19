import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserProfile = () => {
    const axiosSecure = useAxiosSecure();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get('/users/profile')
            .then(res => {
                setProfile(res.data);
                setLoading(false);
            });
    }, []);

    return [profile, loading, setProfile];
};

export default useUserProfile;