import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboardpage from "./pages/Dashboardpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboardpage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
