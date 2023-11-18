import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const axiosSecure = useAxios()
    const {user} = useAuth() 
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;