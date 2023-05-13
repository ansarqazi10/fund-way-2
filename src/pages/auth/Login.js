import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../../services/user";
import useStore from "../../store/store";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const { setUser, setToken } = useStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const login = () => {
    if (email === "" || password === "") {
      setError(
        "All fields are required. Please fill all the fields before submitting the form."
      );
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter valid email address.");
      return;
    }

    userService.login({ email, password }).then((result) => {
      if (result.error) {
        setError(result.error);
        return;
      }
      let token = result.data.token;
      let user = result.data.user;
      setUser(user);
      setToken(token);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/portal/${user._id}`);
    });
  };

  const validateEmail = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isValid = email.match(validRegex);
    return isValid;
  };

  return (
    <>
      <div className="row login">
        <h2 className="white bold">
          Login to your <span className="yellow">Fundway</span> <br />
          Account
        </h2>
        <div className="box">
          <form>
            <div className="form-group white bold mb-3">
              <label htmlFor="email" className="p-2 mb-3 input">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold">
              <label htmlFor="password" className="p-2 mb-3 input">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <p className="bold24 red mt-2">{error}</p>

            <div className="form-group mt-2 white link bold18">
              Forgot your password?{" "}
              <Link to="/forgot-password" className="white link">
                Reset
              </Link>
            </div>
            <div className="form-group white mt-5 bold24">
              Dont have an account?{" "}
              <Link to="/register" className="link">
                Click here to register
              </Link>
            </div>
          </form>
        </div>
        <button type="submit" className="btn submit" onClick={login}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
