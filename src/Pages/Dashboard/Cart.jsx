import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
// import { Swal } from 'sweetalert2';
import useAxios from './../../hooks/useAxios';
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Cart = () => {
  const [cart, refetch] = useCart();
    const axiosSecure = useAxios()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// console.log()
  const handleDelete = (id)=>{
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
          axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            refetch()
            console.log(res.data)
            if(res.data.deletedCount > 0){
              toast.success('Deleted Successful')
            }
          })
        }
      })
  }
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx+1}</th>
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
                <th>
                  <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrash className="text-red-600"></FaTrash> Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
