import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
    const {logInUser} = useAuth()
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'
// console.log(location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const toastId = toast.loading('logging in ...')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
    .then((result) => {
      console.log(result.user);
      // navigate(location?.state ? location?.state : "/");
      toast.success('Logged in', {id: toastId, duration: 3000} )
      return navigate(from, {replace:true})
    })
    .catch((error) => {
      console.log(error)
      return toast.error('Invalid email or password', {id: toastId, duration: 3000})
    });
};



  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.querySelector("input").value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="mx-auto flex w-11/12 items-center justify-between my-20">
    <Helmet>
        <title>Daily Dine | Login</title>
    </Helmet>
      <div className=" mx-auto flex ">
        <Card className="mx-auto " color="transparent" shadow={false}>
          <Typography className="text-center " variant="h4" color="blue-gray">
            Login
          </Typography>
          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-5">
              <Input name="email" type="text" label="Your Email" />
              <Input name="password" type="password" label="Password" />
              <LoadCanvasTemplate />
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  ref={captchaRef}
                  name="captcha"
                  type="text"
                  label="Type The Captcha"
                  className="border w-full p-2 rounded border-black"
                />
                <Button
                  onClick={handleValidateCaptcha}
                  size="sm"
                  //   color={email ? "gray" : "blue-gray"}
                  //   disabled={!email}
                  className="!absolute right-1 top-1 rounded"
                >
                  Invite
                </Button>
              </div>
            </div>
            <Button
              disabled={disabled}
              type="submit"
              className="mt-6 "
              fullWidth
            >
              Login
            </Button>

            <SocialLogin></SocialLogin>
            <Typography color="gray" className="mt-4 text-center font-normal">
              New Here?{" "}
              <Link
                to={"/register"}
                href="#"
                className="font-bold text-blue-600"
              >
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
