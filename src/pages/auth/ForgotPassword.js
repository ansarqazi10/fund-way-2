import { Link } from "react-router-dom";
import { useState } from "react";
import userService from "../../services/user";

function Login() {
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");

  const submit = () => {
    if (email === "") {
      setError("Please provide your email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter valid email address.");
      return;
    }

    userService.forgotPassword(email).then((result) => {
      if (result.error) {
        setError(result.error);
        return;
      }
      setError(
        "We have sent an email containing information to password reset."
      );
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
        <h2 className="white bold">Forgot Password?</h2>
        <p className="white bold18 mt-3">
          Enter your email & we will provide you password reset information.
        </p>
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
            <p className="bold24 red mt-2">{error}</p>

            <div className="form-group mt-2 white bold18">
              Want to try again?{" "}
              <Link to="/login" className="white link bold18">
                Click here to sign-in
              </Link>
            </div>
          </form>
        </div>
        <button type="submit" className="btn submit" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
