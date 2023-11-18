import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FallingLines } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useAuth();
  // console.log(user, loader);
  const location = useLocation()

  if (loader) {
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

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{from : location}} replace></Navigate>;
};

export default PrivetRoute;
