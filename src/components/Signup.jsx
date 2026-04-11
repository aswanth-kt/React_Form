import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateSignup } from "../utils/validators";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState({});
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const {errors, isValid} = validateSignup(signupData)
    console.log("is valid:", isValid);

    setErrMessage(errors);

    if (isValid) {
      navigate("/success", {state: {
        message: "Signup Successful 🎉",
        para: "Your account has been created successfully."
      }})
    }

  }
  console.log("err message:", errMessage)

  return (
    <div>

      <div className='text-center font-bold mt-8'>
        Signup
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col border-2 rounded-2xl m-6 p-6'
      >

        <label className="px-2">Name</label>
        <input 
          type="text" 
          name="name"
          value={signupData.name}
          placeholder='Enter Your Name'
          onChange={handleChange}
          className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 focus:border-gray-300 focus:outline-none'
        />
        {/* error message */}
        {errMessage?.name && <p className="text-sm text-red-500 px-2 py-1">
          {errMessage?.name}
        </p>}

        <label className="px-2">Email</label>
        <input 
          type="email" 
          name="email"
          value={signupData.email}
          placeholder='name@gmail.com'
          onChange={handleChange}
          className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 focus:border-gray-300 focus:outline-none'
        />
        {/* error message */}
        {errMessage?.email && <p className="text-sm text-red-500 px-2 py-1">
          {errMessage?.email}
        </p>}

        <div className="relative">

          <label className="px-2">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password"
            value={signupData.password}
            placeholder='Enter Your Password'
            onChange={handleChange}
            className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 w-full focus:border-gray-300 focus:outline-none'
          />
          <span 
            className="absolute right-3 top-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
           {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {/* error message */}
        {errMessage?.password && <p className="text-sm text-red-500 px-2 py-1">
          {errMessage?.password}
        </p>}

        </div>

        <div className="relative">

          <label className="px-2">Confirm Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={signupData.confirmPassword}
            placeholder='Re-Enter Your Password'
            onChange={handleChange}
            className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 w-full focus:border-gray-300 focus:outline-none'
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {/* error message */}
        {errMessage?.confirmPassword && <p className="text-sm text-red-500 px-2 py-1">
          {errMessage?.confirmPassword}
        </p>}

        </div>

        <button
          type="submit"
          className="rounded-2xl bg-blue-500 p-2 text-white mt-4"
        >
          Signup
        </button>

      </form>

    </div>
  )
}

export default Signup