
import toast from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const ManageItems = () => {
    const axiosSecure = useAxios()
    const [menu, , , refetch] = useMenu()
    // console.log(menu)

    const handleDelete = (id) => {
        console.log(id)
        Swal
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/menu/${id}`)
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        refetch();
                        toast.success('Deleted Successful')
                    }
                }
            })
    }

    return (
        <div>
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'} ></SectionTitle>
            <div className="overflow-x-auto">
                <div className="text-center mb-5">Total Products {menu.length}</div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {menu.map((item, idx) => (
                            <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                   <Link to={`/dashboard/update/${item._id}`}> <button className="btn btn-ghost btn-xs"><FaEdit className="bg-orange-700 text-xl p-[2px] text-white "></FaEdit>Update</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash className="text-red-600"></FaTrash> Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;