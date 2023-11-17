import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login')
  const noHeaderFooterRegister = location.pathname.includes('register')
  return (
    <div>
      { noHeaderFooter || noHeaderFooterRegister || <Navbar />}
      <Outlet />
      { noHeaderFooter || noHeaderFooterRegister || <Footer />}
    </div>
  );
};

export default MainLayout;
