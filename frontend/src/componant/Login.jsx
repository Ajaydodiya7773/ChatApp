import axios from "axios";
import { useForm } from "react-hook-form";
import { useAuth } from "../contex/Authprovider";
import { Link, useNavigate } from "react-router-dom"; // To navigate after login

export default function Login() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    console.log("User Info:", userInfo);

    axios
      .post("http://localhost:5000/user/login", userInfo)
      .then((response) => {
        console.log(response.data);

        if (response.data) {
          alert("Login Successful");

          // Store JWT token or user data
          localStorage.setItem("Messenger", JSON.stringify(response.data));

          // Update authUser in the context
          setAuthUser(response.data);

          // Redirect to home or another page
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-lg shadow-transparent bg-neutral max-w-md space-y-3 p-4"
      >
        <h1 className="text-green-300 text-4xl py-5 font-bold">
          Login to WhatsappX
        </h1>
        <h2 className="text-xl py-1">Welcome Back</h2>

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        {errors.email && (
          <span className="text-red-600 text-sm font-semibold">
            This field is required
          </span>
        )}

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.password && (
          <span className="text-red-600 text-sm font-semibold">
            This field is required
          </span>
        )}

        {/* Remember Me and Forgot Password */}
        <p>
          <Link to={"/signup"}
            className="text-red-300 underline cursor-pointer font-semibold space-x-3">
            Forgot Password?
          </Link>{" "}
          <label className="ml-14 mr-1">RememberMe</label>
          <input type="checkbox" name="rememberMe" id="rememberme" />
        </p>

        {/* Login Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Login"
            className="text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer"
          />
        </div>

        <p>
          Create an account?{" "}
          <Link to={"/signup"} className="text-red-300 underline cursor-pointer font-semibold space-x-3">
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
