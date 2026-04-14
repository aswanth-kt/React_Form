import { useState } from "react"
import InputForm from "../components/InputForm"
import { validteLogin } from "../utils/validators";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Login = () => {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState()

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

    const { errors } = validteLogin(loginData)
    setErrors(errors)
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    })

    const { errors } = validteLogin(loginData)
    setErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = validteLogin(loginData);

    setErrors(errors);
    console.log(errors)

    if (!isValid) {
      setMessage("Please complete all required fields");
      return;
    };

    navigate("/success", {
      state: {
        message: "Login Successful 🎉",
        para: "Your dashboard.",
      },
    });

  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-1/2 max-w-xl">

          <DotLottieReact
            src="https://lottie.host/0342e3f0-892c-4c41-9b62-b05e5ea21e56/VGuodNn43w.lottie"
            loop
            autoplay
          />

        </div>

        {/* login form */}
        <div className="w-full md:w-1/2 max-w-md">

          <h1 className="text-center font-bold text-2xl mb-6 text-[var(--heading)]">
            Login
          </h1>
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border border-[var(--border)] rounded-2xl p-6 bg-[var(--card-bg)] shadow-lg"
          >

            <InputForm
              label="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter email"
              error={errors.email}
              errors={errors}
              touched={touched}
            />
            <InputForm
              label="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your pasword"
              error={errors.password}
              errors={errors}
              touched={touched}
              isPassword={true}
              showPassword={showPassword}
              togglePassword={() => {
                setShowPassword(!showPassword)
              }}
            />

            <button
              type="submit"
              className="rounded-2xl bg-blue-500 p-2 text-white mt-4 hover:bg-blue-700 disabled:opacity-50"
            >
              Login
            </button>

            {message && (
              <p className="text-red-500 text-center mt-2">
                {message}
              </p>
            )}

            <p className="text-sm mt-4 text-center text-gray-500">
              Don't have an Account? <span> </span>
              <Link 
                to="/signup"
                className="text-blue-500 hover:text-blue-800"
              >
                Signup
              </Link>
            </p>

          </form>

        </div>

      </div>


    </div>
  )
}

export default Login