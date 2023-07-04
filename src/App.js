import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/reset.css"
import HomePage from "./pages/homePage/HomePage";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Loader from "./components/loader/Loader";
import PortfolioHome from "./pages/portfolio/PortfolioHome";
import "./index.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<HomePage />}/> */}
          <Route path="/" element={<PortfolioHome />}/>
          <Route path="/sigin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/loader" element={<Loader />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
