import React, { useState } from "react";
import Dashboard from "./Dashboard"
import Footer from "../../components/Footer"
import Navbar from "../../components/Header/Navbar"

const Dashboardpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Dashboardpage