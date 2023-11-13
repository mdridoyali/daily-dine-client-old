import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <div className="text-xl flex gap-5 items-center justify-center ">
      <li><Link to={'/'} >Home</Link></li>
      <li><Link to={'/menu'} >Menu</Link></li>
      <li><Link to={'/order/salad'} >Order</Link></li>
    </div>
  );

  return (
    <div>
      <div className="navbar fixed z-10 opacity-50  bg-black text-white">
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
          <Link to={'/'} className="btn btn-ghost normal-case text-4xl">Daily Dine</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
