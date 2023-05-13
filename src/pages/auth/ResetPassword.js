import { useState } from "react";
import userService from "../../services/user";

function Login() {
  let [password, setpassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState("");

  const submit = () => {
    let token = window.location.href.split("token=").pop();
    if (password === "" || confirmPassword === "") {
      setError("Please enter password in both fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Both passwords do not match. Please write same password.");
      return;
    }

    userService.resetPassword(token, password).then((result) => {
      if (result.error) {
        setError(result.error);
        return;
      }
      setError(
        "Your password has been reset. You can login with new password."
      );
    });
  };

  return (
    <>
      <div className="row login">
        <h2 className="white bold">Reset Password</h2>
        <p className="white bold18 mt-3">
          Enter new password in both input fields.
        </p>
        <div className="box">
          <form>
            <div className="form-group white bold mb-3">
              <label htmlFor="password" className="p-2 mb-3 input">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="password" className="p-2 mb-3 input">
                Repeat password
              </label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <p className="bold24 red mt-2">{error}</p>
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
