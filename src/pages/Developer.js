import { useEffect, useState } from "react";
import dev1 from "../assets/images/SVGs/dev1.svg";
import dev2 from "../assets/images/SVGs/dev2.svg";
import dev3 from "../assets/images/SVGs/dev3.svg";
import facebookD from "../assets/images/facebookD.svg";
import whatsappD from "../assets/images/whatsappD.svg";
import linkedinD from "../assets/images/linkedinD.svg";
import githubD from "../assets/images/githubD.svg";
import db from "../db/db";

function Developer() {
  let [id, setId] = useState("");
  let [dev, setDev] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let k = window.location.href.split("/").pop();
    setId(k);
    let d = db.developers.find((elem) => elem.id === parseInt(k));
    setDev(d);
  }, []);

  return (
    <>
      <div className="row mx-5">
        <div className="col-7 pt-5 mt-2">
          <h1 className="white text-end">Developers</h1>
          <p className="white text-end text mt-5">{dev.description}</p>

          <div className="row mt-5 mb-5">
            <div className="col-6 d-flex mt-4">
              <img src={facebookD} />
              <p className="text-center yellow p-2 mt-3">{dev.facebook}</p>
            </div>
            <div className="col-6 d-flex mt-4">
              <img src={linkedinD} />
              <p className="text-center yellow p-2 mt-3">{dev.linkedIn}</p>
            </div>
            <div className="col-6 d-flex mt-4">
              <img src={whatsappD} />
              <p className="text-center yellow p-2 mt-3">{dev.whatsapp}</p>
            </div>
            <div className="col-6 d-flex mt-4">
              <img src={githubD} />
              <p className="text-center yellow p-2 mt-3">{dev.github}</p>
            </div>
          </div>
        </div>
        <div className="col-5">
          {id === "1" && <img src={dev1} className="devImg mt-5" />}
          {id === "2" && <img src={dev2} className="devImg mt-5" />}
          {id === "3" && <img src={dev3} className="devImg mt-5" />}
        </div>
      </div>
    </>
  );
}

export default Developer;
