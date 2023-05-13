import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import useStore from "../store/store";

const Header = () => {
  const { token, setToken } = useStore((state) => state);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <div className="row header mb-3">
        <div className="col">
          <nav className="navbar navbar-expand-md">
            <Link to="/">
              <img src={logo} height={119} width={95} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex"
              id="navbarCollapse"
              style={{
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <ul className="navbar-nav mb-md-0">
                <li className="nav-item active">
                  <Link className="nav-link py-1" to="/find-a-fundraiser">
                    <i className="fa fa-solid fa-magnifying-glass"></i>
                    Find a fundraiser
                  </Link>
                </li>
                {!token ? (
                  <li className="nav-item">
                    <Link className="nav-link py-1 bold18" to="/login">
                      <i className="fa fa-regular fa-circle-user"></i>
                      Login
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <span className="nav-link py-1 bold18" onClick={logout}>
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </span>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav mb-2 mb-md-0">
                <li className="nav-item mt-2">
                  <Link className="nav-link py-1" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link className="nav-link py-1" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link className="nav-link py-1" to="/ways-to-fundraise">
                    Ways to Fundraise
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link className="nav-link py-1" to="/developers">
                    Developers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-1" to="/fundraise">
                    <button className="btn btnRed">FUNDRAISE</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link py-1" to="/donate">
                    <button className="btn btnYellow">DONATE</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
