import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";
function Navbar() {
  const auth = useContext(AuthContext);
  const history = useHistory()

  const handleLogout = () => {
    auth.setIsLoggedIn(false)
    auth.setToken("")
    history.push("/")

  }
  return (
    <nav>
      <NavLink exact activeClassName="link-active" to="/">
        Home{" "}
      </NavLink>
      {auth.isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <NavLink activeClassName="link-active" to="/signup">
            Signup
          </NavLink>
          <NavLink activeClassName="link-active" to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
