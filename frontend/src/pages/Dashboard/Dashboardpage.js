import React, { useState } from "react";
import Dashboard from "./Dashboard"
import Footer from "../../components/Footer"
import Navbar from "../../components/Header/Navbar"

const Dashboardpage = () => {
  console.log(sessionStorage.getItem("token"))
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Dashboardpage