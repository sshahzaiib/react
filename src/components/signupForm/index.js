import { useState } from "react";
import { validate } from "./helpers";
import axios from 'axios'

const SignupForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
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

    axios.post("https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/signup", state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error.response)
      setErrors(error.response.data)
    })

  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <span>{errors.name}</span>
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
        name="handle"
        value={state.handle}
        type="text"
        placeholder="Username"
        onChange={handleChange}
      />
      <span>{errors.handle}</span>

      <input type="Submit" value="Submit" readOnly />
    </form>
  );
};

export default SignupForm;
