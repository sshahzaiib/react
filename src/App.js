import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/navbar";
export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const contextValue = {
    isLoggedIn: isLoggedIn,
    token: token,
    setIsLoggedIn: setIsLoggedIn,
    setToken: setToken,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
