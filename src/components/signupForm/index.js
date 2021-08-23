import { useState } from "react";
import { validate } from "./helpers";

const SignupForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const errors = validate(state) 
   
    event.preventDefault();
    
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      setErrors({})
    }


    console.log(state);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={state.firstName}
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <span>{errors.firstName}</span>
      <input
        name="lastName"
        value={state.lastName}
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <span>{errors.lastName}</span>
      <input
        name="email"
        value={state.email}
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <span>{errors.email}</span>
      <input
        name="password"
        value={state.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <span>{errors.password}</span>
      <input
        name="confirmPassword"
        value={state.confirmPassword}
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <span>{errors.confirmPassword}</span>
      <input
        name="contact"
        value={state.contact}
        type="number"
        placeholder="Contact No"
        onChange={handleChange}
      />
      <span>{errors.contact}</span>

      <input type="Submit" value="Submit" readOnly />
    </form>
  );
};

export default SignupForm;
