import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
