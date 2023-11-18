import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FallingLines } from "react-loader-spinner";
import useAuth from './../hooks/useAuth';


// eslint-disable-next-line react/prop-types
const AdminRoutes = ({children}) => {
    const {user, loader} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loader || isAdminLoading) {
      return (
        <div className="flex justify-center h-screen items-center">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      );
    }
  
    if (user && isAdmin) {
      return children;
    }

    
  return <Navigate to={"/"} state={{from : location}} replace></Navigate>;
  
};

export default AdminRoutes;