import React from "react";
import HalamanLogin from "./pages/Loginpage"
import HalamanRegister from "./pages/Registerpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jelajahpage from "./pages/Jelajahpage";
import Dashboardpage from "./pages/Dashboardpage";
import Profilepage from "./pages/Profilepage";
import Jelajahmainpage from "./pages/Jelajahmainpage";
import Utakmainpage from "./pages/Utakmainpage";
import Berkacamainpage from "./pages/Berkacamainpage";
import Jelajahprofilpage from "./pages/Jelajahprofilpage";
import Utakpage from "./pages/Utakpage";
import Berkacapage from "./pages/Berkacapage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboardpage />}></Route>
		    <Route exact path="/Login" element={<HalamanLogin />}></Route>
        <Route exact path="/Register" element={<HalamanRegister />}></Route>
        <Route exact path="/Jelajah" element={<Jelajahpage />}></Route>
        <Route exact path="/Utak" element={<Utakpage />}></Route>
        <Route exact path="/Berkaca" element={<Berkacapage />}></Route>
        <Route exact path="/Profile" element={<Profilepage />}></Route>
        <Route exact path="/Jelajahmainpage" element={<Jelajahmainpage />}></Route>
        <Route exact path="/Utakmainpage" element={<Utakmainpage />}></Route>
        <Route exact path="/Berkacamainpage" element={<Berkacamainpage />}></Route>
        <Route exact path="/Jelajah-Profil" element={<Jelajahprofilpage />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
