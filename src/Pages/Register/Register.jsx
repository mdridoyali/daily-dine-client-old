import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import SocialLogin from "../../Components/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const { createUser, updateUserProfile } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])[A-Za-z\d@#$%^&+=!.]{6,20}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least one uppercase, one digit, one special character and be 6 to 20 characters long.",
      });
    }
    <div className="mt-6"></div>

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: name,
              email: email,
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  toast.success("Successfully Registered", { duration: 3000 });
                  form.reset();
                  console.log(res.data);
                  navigate(location?.state ? location?.state : "/");
                }
              })
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        form.reset();
        return toast.error("Already have an account", { duration: 3000 });
      });
  };

  return (
    <div className="mx-auto flex w-11/12 items-center justify-center my-10">
      <Helmet>
        <title>Daily Dine | Register</title>
      </Helmet>
      <div className="">
        <Card color="transparent" shadow={false}>
          <Typography className="text-center " variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <form
            onSubmit={handleRegister}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input name="name" type="text" label="Your Name" />
              <Input name="email" type="email" label="Your Email" />
              <Input name="photo" type="text" label="Photo URL" />
              <div className="relative ">
                <Input
                  name="password"
                  type={show ? "text" : "password"}
                  label="Password"
                  className="border w-full p-2 rounded border-black"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 cursor-pointer bottom-2"
                >
                  {show ? <p>Hide</p> : <p>Show</p>}
                </span>
              </div>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6 bg-blue-700" fullWidth>
              Register
            </Button>

            <SocialLogin></SocialLogin>{" "}
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to={"/login"} href="#" className="font-bold text-gray-900">
                Login
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
