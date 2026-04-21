import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://xpoint-server.vercel.app/'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // REQUEST interceptor → attach token
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem("access-token");

            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            return config;
        });

        // RESPONSE interceptor → handle auth errors
        axiosSecure.interceptors.response.use(
            res => res,
            err => {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    console.log("Unauthorized → logging out");
                    localStorage.removeItem("access-token");
                    navigate('/login');
                }
                return Promise.reject(err);
            }
        );

    }, [navigate]);

    return axiosSecure;
};

export default useAxiosSecure;