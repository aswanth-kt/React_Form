import { FaEye, FaEyeSlash } from "react-icons/fa"


const InputForm = ({
  label,
  type= "text",
  name,
  value,
  placeholder,
  onChange,
  error,
  isPassword= false,
  showPassword,
  togglePassword,
  errors,
  touched,
  onBlur
}) => {
  return (
    
    <div className="mb-3">

      <label 
        htmlFor={name}
        className="px-2 text-[var(--subtext)]"
      >
        {label}
      </label>

      <div className="relative">

        <input 
          type={isPassword ? (showPassword ? "text" : "password") : type} 
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full rounded-2xl border-gray-200 p-2 focus:border-gray-300 focus:outline-none placeholder:text-[var(--placeholder)] bg-[#363b46] text-white"
        />

        {isPassword && (
          <span
            onClick={togglePassword}
            className="absolute right-3 py-3 cursor-pointer"
          >
            {showPassword ? <FaEye className="text-white"/> : <FaEyeSlash className="text-white"/>}
          </span>
        )}

        {touched[name] && errors[name] && (
          <p className="text-sm text-red-500 px-2 py-1">
            {error}
          </p>
        )}

      </div>

    </div>

  )
}

export default InputForm