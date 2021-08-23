import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact activeClassName="link-active" to="/">Home </NavLink>
      <NavLink activeClassName="link-active" to="/signup">Signup</NavLink>
    </nav>
  );
}

export default Navbar;
