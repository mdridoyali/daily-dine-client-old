import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ item }) => {
  const [ , refetch] = useCart()
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  // eslint-disable-next-line react/prop-types
  const { name, image, price, recipe, _id } = item;

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = (food) => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        if(res.data.insertedId){
            toast.success(`${name} Added to the Cart`)
            refetch()
        }
      })


    } else {
      Swal.fire({
        title: "You Are Not Logged In!",
        text: "Please Login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-7">
      <div className="card card-compact w-96 mb-1 shadow-sm">
        <figure>
          <img className="w-full" src={image} alt="Food" />
        </figure>
        <p className="absolute right-0 bg-slate-800 text-white px-3 mt-3 mr-4 rounded">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn border-0  border-b-4 border-orange-400 hover:bg-black hover:text-white outline-none  "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
