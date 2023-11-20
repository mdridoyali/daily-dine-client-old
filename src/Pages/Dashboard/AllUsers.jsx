import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaTrash, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',)
            return res.data
        }
    })


    const handleMakeAdmin = (user) => {
        console.log(user)
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${user.name} is an Admin Now!`)
                }
            })

    }


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        refetch()
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            toast.success('Deleted Successful')
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All User</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500  btn-ghost btn-xs"><FaUser className="text-xl"></FaUser></button>}</td>
                                <td> <button onClick={() => handleDelete(user._id)} className="btn text-xl btn-ghost btn-xs"><FaTrash className="text-red-600"></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;