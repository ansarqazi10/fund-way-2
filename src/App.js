import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TipsAndTools from "./pages/TipsAndTools";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import FindaFundraiser from "./pages/FindaFundraiser";
import About from "./pages/AboutUs";
import WaysToFundraise from "./pages/WaysToFundraise";
import Developers from "./pages/Developers";
import Developer from "./pages/Developer";
import Portal from "./pages/Portal";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Routes className="routes">
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/rp" element={<ResetPassword />} />
          <Route
            exact
            path="/find-a-fundraiser"
            element={<FindaFundraiser />}
          />
          <Route exact path="/tips-and-tools" element={<TipsAndTools />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/developers" element={<Developers />} />
          <Route exact path="/developer/:id" element={<Developer />} />
          <Route exact path="/portal/:id" element={<Portal />} />
          <Route
            exact
            path="/ways-to-fundraise"
            element={<WaysToFundraise />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
