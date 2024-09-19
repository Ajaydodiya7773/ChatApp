import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../contex/Authprovider";


export default function Signup() {
  // Destructure the 'setAuthUser' from 'useAuth' hook correctly
  const { authUser,setAuthUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    
  } = useForm();

  // Watch password and confirm password to validate
  const password = watch("password", "");
  const confirmpassword = watch("confirmpassword", "");

  // Password validation logic
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords don't match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.fullname,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };

    console.log("User Info:", userInfo); // Check the data being sent

    try {
      const response = await axios.post("http://localhost:5000/user/signup", userInfo);
      console.log(response.data);

      if (response.data) {
        alert("Signup Successfully, you can now log in");
        localStorage.setItem("Messenger", JSON.stringify(response.data));
        setAuthUser(response.data); // Set the authenticated user data
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form
          className="border rounded-lg shadow-transparent bg-neutral max-w-md space-y-3 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-green-300 text-4xl py-5 font-bold">Welcome to WhatsappX</h1>
          <h2 className="text-xl py-1">
            Create A New{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </h2>

          {/* Username */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("fullname", { required: true })}
            />
          </label>
          {errors.fullname && <span className="text-red-600 text-sm font-semibold">This field is required</span>}

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
          {errors.email && <span className="text-red-600 text-sm font-semibold">This field is required</span>}

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
          {errors.password && <span className="text-red-600 text-sm font-semibold">This field is required</span>}

          {/* Confirm Password */}
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
              placeholder="Confirm Password"
              {...register("confirmpassword", { required: true, validate: validatePasswordMatch })}
            />
          </label>
          {errors.confirmpassword && <span className="text-red-600 text-sm font-semibold">{errors.confirmpassword.message}</span>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <input type="submit" value="Signup" className="text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer" />
          </div>

          <p>
            Already have an account?{" "}
            <span className="text-red-300 underline cursor-pointer font-semibold">Login</span>
          </p>
        </form>
      </div>
    </>
  );
}
