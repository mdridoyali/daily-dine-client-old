import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart()

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();


  return (
    <div className="flex ">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-black opacity-70  text-white  ">
        <ul className="menu">
          {
            isAdmin ? <>
              <li>
                <NavLink to={"/"} className={'text-xl font-semibold'}>
                  <FaHome></FaHome>DailyDine
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>Manage Items
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook></FaBook>Manage Booking
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>{" "}
              {/* Shared bar */}
              <div className="divider "></div>
              <li>
                <NavLink to={"/order/salad"}>
                  <FaSearch></FaSearch>Menu
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/order/contact"}>
                  <FaEnvelope></FaEnvelope> Contact
                </NavLink>
              </li>{" "}
            </> :

              <>
                <li>
                  <NavLink to={"/"} className={'text-xl font-semibold'}>
                    <FaHome></FaHome>DailyDine
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/dashboard/userHome"}>
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/dashboard/cart"}>
                    <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/dashboard/paymentHistory"}>
                    <FaCalendar></FaCalendar> Payment History
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/dashboard/review"}>
                    <FaAd></FaAd>Add a Reviews
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/dashboard/bookings"}>
                    <FaList></FaList>My Bookings
                  </NavLink>
                </li>{" "}
                {/* Shared bar */}
                <div className="divider"></div>
                <li>
                  <NavLink to={"/order/salad"}>
                    <FaSearch></FaSearch>Menu
                  </NavLink>
                </li>{" "}
                <li>
                  <NavLink to={"/order/contact"}>
                    <FaEnvelope></FaEnvelope> Contact
                  </NavLink>
                </li>{" "}
              </>
          }

        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
