import { Link } from "react-router-dom";
import logo from "../assets/images/footerLogo.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import useStore from "../store/store";

function Footer() {
  const { token, user } = useStore((state) => state);

  return (
    <div className="row justify-content-center footer">
      <div className="col-sm-12 col-md-6 col-lg-3">
        <img src={logo} height={157} width={125} />
      </div>

      <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/ways-to-fundraise">Ways to Fundraise</Link>
          </li>
        </ul>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
        <ul>
          <li>
            <Link to="/tips-and-tools">Tips and Tools</Link>
          </li>
          <li>
            <Link to="/developers">Developers</Link>
          </li>
          {token ? (
            <li>
              <Link to={`/portal/${user._id}`}>My Portal</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-3 mt-4 social">
        <p>Socials</p>
        <img src={youtube} alt="youtube" className="footer-icon" />
        <img src={instagram} alt="instagram" className="footer-icon" />
        <img src={facebook} alt="facebook" className="footer-icon" />
        <img src={whatsapp} alt="whatsapp" className="footer-icon" />
        <p>
          Email us at <a href="#">fundway@outlook.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
