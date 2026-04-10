import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const hnadleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();



  }

  return (
    <div>

      <div className='text-center font-bold mt-8'>
        Signup
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col border-2 rounded-2xl m-6 p-6'
      >

        <label>Name</label>
        <input 
          type="text" 
          name="name"
          value={signupData.name}
          placeholder='Enter Your Name'
          onChange={hnadleChange}
          className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 focus:border-gray-300 focus:outline-none'
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email"
          value={signupData.email}
          placeholder='name@gmail.com'
          onChange={hnadleChange}
          className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 focus:border-gray-300 focus:outline-none'
        />

        <div className="relative">

          <label>Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password"
            value={signupData.password}
            placeholder='Enter Your Password'
            onChange={hnadleChange}
            className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 w-full focus:border-gray-300 focus:outline-none'
          />
          <span 
            className="absolute right-3 top-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
           {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <div className="relative">

          <label>Confirm Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={signupData.confirmPassword}
            placeholder='Re-Enter Your Password'
            onChange={hnadleChange}
            className='rounded-2xl border-2 border-gray-200 mb-2 mt-1 px-2 py-1 w-full focus:border-gray-300 focus:outline-none'
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

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