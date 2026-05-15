import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSomeProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: someProducts = [], isPending: loading, refetch } = useQuery({
        queryKey: ['someProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products?limit=8');
            return res.data;
        }
    })

    return [someProducts, loading, refetch]
};

export default useSomeProducts;