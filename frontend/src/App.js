import React from "react";
import HalamanDashboard from "./pages/Dashboardpage";
import HalamanLogin from "./pages/Loginpage"
import HalamanRegister from "./pages/Registerpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Utakpage from "./pages/Utakpage";
import Jelajahpage from "./pages/Jelajahpage";
import Berkacapage from "./pages/Berkacapage";
import Dashboardpage from "./pages/Dashboardpage";
import Profilepage from "./pages/Profilepage";
import Jelajahmainpage from "./pages/Jelajahmainpage";
import Utakmainpage from "./pages/Utakmainpage";
import Berkacamainpage from "./pages/Berkacamainpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboardpage />}></Route>
		    <Route exact path="/Login" element={<HalamanLogin />}></Route>
        <Route exact path="/Register" element={<HalamanRegister />}></Route>
        <Route exact path="/Jelajah" element={<Jelajahpage />}></Route>
        <Route exact path="/Profile" element={<Profilepage />}></Route>
        <Route exact path="/Jelajahmain" element={<Jelajahmainpage />}></Route>
        <Route exact path="/Jelajahmain" element={<Utakmainpage />}></Route>
        <Route exact path="/Jelajahmain" element={<Berkacamainpage />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
