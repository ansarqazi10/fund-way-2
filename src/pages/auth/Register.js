import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Terms from "../../components/Terms";
import userService from "../../services/user";
import useStore from "../../store/store";

function Register() {
  let [name, setName] = useState("");
  let [cnic, setCnic] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState("");

  let [isChecked, setIsChecked] = useState(false);
  let [showTC, setShowTC] = useState(false);

  const { setUser } = useStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (isChecked) setShowTC(false);
  }, [isChecked]);

  const register = () => {
    if (
      name === "" ||
      cnic === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(
        "All fields are required. Please fill all the fields before submitting the form."
      );
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Both passwords do not match.");
      return;
    }
    let data = { name, cnic, email, password };
    userService.signup(data).then((result) => {
      if (result.error) {
        setError(result.error);
        return;
      }
      let user = result.data.user;
      setUser(user);
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
          Registeration of your <br />
          <span className="yellow">Fundway </span>
          Account
        </h2>
        <div className="box boxR">
          <form>
            <div className="form-group white bold mb-3">
              <label htmlFor="name" className="p-2 input">
                Full name
              </label>
              <input
                type="text"
                className="form-control mt-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="cnic" className="p-2 input">
                CNIC/Passport #
              </label>
              <input
                type="text"
                className="form-control mt-3"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="email" className="p-2 input">
                Email Address
              </label>
              <input
                type="email"
                className="form-control mt-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="password" className="p-2 input">
                Password
              </label>
              <input
                type="password"
                className="form-control mt-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="password" className="p-2 input">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control mt-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <p className="bold24 red">{error}</p>
            <div className="form-group white bold mt-5 bold24">
              Already have an account?{" "}
              <Link to="/login" className="white bold link">
                Click here to sigin
              </Link>
            </div>
            <div className="form-group mt-5 text-center">
              <input
                type="checkbox"
                className="form-check-input"
                value={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />{" "}
              <label className="form-check-label bold18" htmlFor="checkBox">
                I agree to the{" "}
                <Link
                  href="#"
                  className="linkB"
                  onClick={() => {
                    showTC ? setShowTC(false) : setShowTC(true);
                  }}
                >
                  terms and conditions
                </Link>{" "}
                of <br />
                the website before I register
              </label>
            </div>
          </form>
          {showTC && (
            <div className="t&c mb-5">
              <Terms />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn submit mb-5"
          disabled={!isChecked}
          onClick={register}
        >
          Register
        </button>
      </div>
    </>
  );
}

export default Register;
