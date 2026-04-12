import { useState } from "react"
import InputForm from "../components/InputForm"
import { validteLogin } from "../utils/validators";
import { Link } from "react-router-dom";


const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
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
    e.preventDefault()
  }

  return (
    <div className="max-w-md mx-auto mt-10">

      <h1 className="text-center font-bold text-xl mb-6">
        Login
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 rounded-2xl p-6"
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
  )
}

export default Login