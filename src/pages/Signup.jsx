import { useState } from "react";
import InputForm from "../components/InputForm"
import { validateSignup } from "../utils/validators";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {

    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })

    const {errors} = validateSignup(signupData);

    setErrors(errors);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = validateSignup(signupData);

    setErrors(errors);

    if (!isValid) return;

    navigate("/success", {
      state: {
        message: "Signup Successful 🎉",
        para: "Your account has been created successfully."
      }
    })

  };

  // console.log("signup data:", signupData)

  return (
    <div className="max-w-md mx-auto mt-10">

      <h1 className="text-center font-bold text-xl mb-6">
        Signup
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 rounded-2xl p-6"
      >

        <InputForm 
          label="Name"
          name="name"
          value={signupData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          error={errors.name}
        />

        <InputForm 
          label="Email"
          name="email"
          value={signupData.email}
          placeholder="name@example.com"
          onChange={handleChange}
          error={errors.email}
        />

        <InputForm 
          label="Password"
          name="password"
          value={signupData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          error={errors.password}
          isPassword={true}
          showPassword={showPassword.password}
          togglePassword={() => {
            setShowPassword((prev) => ({
                ...prev,
                password: !prev.password
            }))
          }}
        />

        <InputForm 
          label="Confirm Password"
          name="confirmPassword"
          value={signupData.confirmPassword}
          placeholder="Re-enter your password"
          onChange={handleChange}
          error={errors.confirmPassword}
          isPassword={true}
          showPassword={showPassword.confirmPassword}
          togglePassword={() => {
            setShowPassword((prev) => ({
              ...prev,
              confirmPassword: !prev.confirmPassword
            }))
          }}
        />

        <button
          type="submit"
          className="rounded-2xl bg-blue-500 p-2 text-white mt-4 hover:bg-blue-700 disabled:opacity-50"
        >
          Signin
        </button>

      </form>

    </div>
  )
}

export default Signup