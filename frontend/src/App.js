import React from "react";
import HalamanDashboard from "./pages/Dashboardpage";
import HalamanLogin from "./pages/Loginpage"
import HalamanRegister from "./pages/Registerpage"
import Carousel from "./components/Carousel"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HalamanDashboard />}></Route>
		    <Route exact path="/Login" element={<HalamanLogin />}></Route>
        <Route exact path="/Register" element={<HalamanRegister />}></Route>
        {/* <Route exact path="/carousel" element={<Carousel />}></Route> */}
      </Routes>
    </Router>
  );
};
export default App;
