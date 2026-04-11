import { useState } from "react";
import { validteLogin } from "../utils/validators";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validteLogin(loginData);
    
    setErrMessage(errors)

  }

  return (
    <div>
      <div className="text-center font-bold mt-8">Login</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 rounded-2xl m-6 p-6"
      >

        <label className="px-2">Email</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          placeholder="name@gmail.com"
          onChange={handleChange}
          className="rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 focus:border-gray-300 focus:outline-none"
        />
        {/* error message */}
        {errMessage?.email && (
          <p className="text-sm text-red-500 px-2 py-1">{errMessage?.email}</p>
        )}

        <div className="relative">
          <label className="px-2">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={loginData.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 w-full focus:border-gray-300 focus:outline-none"
          />
          <span
            className="absolute right-3 top-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {/* error message */}
          {errMessage?.password && (
            <p className="text-sm text-red-500 px-2 py-1">
              {errMessage?.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-blue-500 p-2 text-white mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
