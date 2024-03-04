import React from "react";
import HalamanDashboard from "./pages/Dashboardpage";
import HalamanLogin from "./pages/Loginpage"
import HalamanRegister from "./pages/Registerpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Utakpage from "./pages/Utakpage";
import Jelajahpage from "./pages/Jelajahpage";
import Berkacapage from "./pages/Berkacapage";
import Dashboardpage from "./pages/Dashboardpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboardpage />}></Route>
		    <Route exact path="/Login" element={<HalamanLogin />}></Route>
        <Route exact path="/Register" element={<HalamanRegister />}></Route>
        <Route exact path="/Jelajah" element={<Jelajahpage />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
