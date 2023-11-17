import { Button } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from './../hooks/useAxiosPublic';


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const { googleLogin } = useAuth()
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email
                }
                axiosPublic.post('/users', userInfo)
                .then((res) => {
                    console.log(res.data)
                })
                console.log(res.user);
                navigate(location?.state ? location?.state : "/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="mt-2 pb-2 text-center flex">
                <p className="border-b border-black flex-1"></p>
                <p className="font-bold text-lg">or</p>
                <p className="border-b border-black flex-1"></p>
            </div>
            <Button
                className="btn w-full btn-sm hover:bg-light-green-600 hover:text-white mt-5 md:px-8 pb-6 px-4 "
                onClick={handleGoogleLogin}
            >
                {"Continue with Google"}
                <FaGoogle className="text-xl"></FaGoogle>{" "}
            </Button>
        </div>
    );
};

export default SocialLogin;