import { useEffect } from "react";
import { Link } from "react-router-dom";
import dev1 from "../assets/images/SVGs/dev1.svg";
import dev2 from "../assets/images/SVGs/dev2.svg";
import dev3 from "../assets/images/SVGs/dev3.svg";

function Developers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row developers">
        <div className="col pt-5">
          <h1 className="white">
            Meet the <span className="yellow">Dev</span>elopers
          </h1>

          <Link to={`/developer/1`}>
            <img src={dev1} className="devImg mb-2" />
          </Link>
          <Link to={`/developer/2`}>
            <img src={dev2} className="devImg mt-5" />
          </Link>
          <Link to={`/developer/3`}>
            <img src={dev3} className="devImg mb-2" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Developers;
