import React from "react";
import HalamanDashboard from "./pages/Dashboardpage";
import HalamanLogin from "./pages/Loginpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HalamanDashboard />}></Route>
		<Route exact path="/Login" element={<HalamanLogin />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
