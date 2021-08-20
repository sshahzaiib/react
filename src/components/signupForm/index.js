import { useState } from "react"

const SignupForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: ""
    })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(state)
  }

  return (<form className="signup-form" onSubmit={handleSubmit}>
    <input name="firstName" value={state.firstName} type="text" placeholder="First Name" onChange={handleChange} />
    <input name="lastName" value={state.lastName} type="text" placeholder="Last Name" onChange={handleChange} />
    <input name="email" value={state.email} type="email" placeholder="Email" onChange={handleChange} />
    <input name="password" value={state.password} type="password" placeholder="Password" onChange={handleChange} />
    <input name="confirmPassword" value={state.confirmPassword} type="password" placeholder="Confirm Password" onChange={handleChange} />
    <input name="contact" value={state.contact} type="number" placeholder="Contact No" onChange={handleChange} />

    <input type="Submit" value="Submit" readOnly />
  </form>)
}

export default SignupForm