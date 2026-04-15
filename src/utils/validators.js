export const validateSignup = (values) =>  {
  const errors = {};

  if (!values.name.trim()) errors.name = "Name required";

  if (!values.email.trim()) errors.email = "Email required";

  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email"


  if (!values.password.trim()) errors.password = "Password required";

  else if (!/(?=.*[A-Z])/.test(values.password)) errors.password = "Password must contain at least one uppercase letter"

  else if (!/(?=.*[a-z])/.test(values.password)) errors.password = "Password must contain at least one lowercase letter"

  else if (!/(?=.*\d)/.test(values.password)) errors.password = "Password must contain at least one number"

  else if (!/(?=.*[@$!%*?&])/.test(values.password)) errors.password = "Password must contain at least 1 special character"

  else if (values.password.length < 6) errors.password = "Min 6 charactors"


  if (values.password !== values.confirmPassword) errors.confirmPassword = "Password do not match";

  const isValid = Object.keys(errors).length === 0

  return { errors, isValid };

};


export const validteLogin = (values) => {
  const errors = {};

  if (!values.email.trim()) errors.email = "Email required";
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email"

  if (!values.password.trim()) errors.password = "Password required";

  else if (!/(?=.*[A-Z])/.test(values.password)) errors.password = "Password must contain at least one uppercase letter"

  else if (!/(?=.*[a-z])/.test(values.password)) errors.password = "Password must contain at least one lowercase letter"

  else if (!/(?=.*\d)/.test(values.password)) errors.password = "Password must contain at least one number"

  else if (!/(?=.*[@$!%*?&])/.test(values.password)) errors.password = "Password must contain at least 1 special character"

  else if (values.password.length < 6) errors.password = "Min 6 charactors"
  

  const isValid = Object.keys(errors).length === 0

  return { errors, isValid };

}