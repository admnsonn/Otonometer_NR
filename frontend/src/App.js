import React from "react";
import HalamanLogin from "./pages/Sign/Loginpage"
import HalamanRegister from "./pages/Sign/Registerpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jelajahpage from "./pages/Jelajah/Jelajahpage";
import Dashboardpage from "./pages/Dashboard/Dashboardpage";
import Profilepage from "./pages/Profile/Profilepage";
import Jelajahmainpage from "./pages/Jelajah/Jelajahmainpage";
import Utakmainpage from "./pages/Utak-Atik/Utakmainpage";
import Berkacamainpage from "./pages/Berkaca/Berkacamainpage";
import Jelajahprofilpage from "./pages/Jelajah/Jelajahprofilpage";
import Utakpage from "./pages/Utak-Atik/Utakpage";
import Berkacapage from "./pages/Berkaca/Berkacapage";
import UtakGraphPage from "./pages/Utak-Atik/UtakGraphPage";
import Arsippage from "./pages/Jelajah/arsippage";
import HalamanMasuk from "./pages/auth/Masukpage";
import HalamanDaftar from "./pages/auth/Daftarpage";
import ArsipUtakPage from "./pages/Utak-Atik/ArsipUtakPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboardpage />}></Route>
		    <Route exact path="/Login" element={<HalamanLogin />}></Route>
        <Route exact path="/Masuk" element={<HalamanMasuk />}></Route>
        <Route exact path="/Register" element={<HalamanRegister />}></Route>
        <Route exact path="/Jelajah" element={<Jelajahpage />}></Route>
        <Route exact path="/Utak-Atik" element={<Utakpage />}></Route>
        <Route exact path="/Berkaca" element={<Berkacapage />}></Route>
        <Route exact path="/Profile" element={<Profilepage />}></Route>
        <Route exact path="/Jelajah-Main" element={<Jelajahmainpage />}></Route>
        <Route exact path="/Utak-Atik-Main" element={<Utakmainpage />}></Route>
        <Route exact path="/Berkaca-Main" element={<Berkacamainpage />}></Route>
        <Route exact path="/Jelajah-Profil" element={<Jelajahprofilpage />}></Route>
        <Route exact path="/UtakGraph" element={<UtakGraphPage />}></Route>
        <Route exact path="/Arsip" element={<Arsippage />}></Route>
        <Route exact path="/Daftar" element={<HalamanDaftar />}></Route>
        <Route exact path="/ArsipUtak" element={<ArsipUtakPage />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
