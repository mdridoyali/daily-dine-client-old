import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [cart] = useCart()
  const { user, logOutUser } = useAuth();
  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <div className="text-xl flex gap-5 items-center justify-center ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/cart"}>
          <button className="btn">
          <FaShoppingCart className="text-xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </div>
  );

  return (
    <div>
      <div className="navbar max-w-screen-2xl  fixed z-10 opacity-50  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-4xl">
            Daily Dine
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex text-xl  gap-5">
              <p>{user?.displayName}</p>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <div className="text-xl ">
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
