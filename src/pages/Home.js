import svg from "../assets/images/SVGs/Child.svg";
import rectangle from "../assets/images/SVGs/rectangle.svg";
import dollar from "../assets/images/SVGs/dollar.svg";
import train from "../assets/images/SVGs/train.svg";
import charity from "../assets/images/SVGs/charity.svg";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectService from "../services/project";

function Home() {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  function getProjects() {
    projectService.get({ keyword: "" }).then((result) => {
      setProjects(result.data);
    });
  }

  return (
    <>
      <div className="row">
        <div className="col-7">
          <img
            src={svg}
            width={1000}
            height={1000}
            style={{ margin: "-15% 0 0 -15%" }}
          />
        </div>
        <div className="col-5 mt-5 white">
          <h1>
            <span style={{ fontWeight: 400 }}>We're with</span> <br />
            <span className="yellow">Every kid</span>
            <br />
            <span className="bold">in Pakistan</span>
          </h1>

          <p className="white text" style={{ width: "70%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>

          <Link
            to="/about"
            className="bold link"
            style={{ color: "#F2902F", textDecoration: "none" }}
          >
            <h5>
              Read more <img src={rectangle} />
            </h5>
          </Link>
        </div>
      </div>

      <p className="target">Fundraise target 10 ETH</p>
      <div className="row row2">
        <div
          className="boxUp"
          style={{
            backgroundColor: "#821D20",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "-80px",
          }}
        >
          <div className="col-4 d-flex justify-content-center">
            <img src={charity} className="mx-5" />
            <div className="center">
              <p className="text yellow m-0">People donated</p>
              <h1 className="white">14,670</h1>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img src={train} className="mx-5" />
            <div className="center">
              <p className="text yellow m-0">Progress</p>
              <h1 className="white">27%</h1>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img src={dollar} className="mx-5" />
            <div className="center">
              <p className="text yellow m-0">Money raised so far</p>
              <h1 className="white">2.7 ETH</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center white mt-5">
        <div className="col">
          <h1>Other Listed Projects</h1>
        </div>
      </div>
      {projects.length > 0 ? (
        <div className="row text-center white homeProjects mt-5">
          {projects.map((elem) => {
            return <Card data={elem} key={elem._id} />;
          })}
        </div>
      ) : (
        <div className="row text-center userProjects mt-5">
          <div className="col red bold18">No data found</div>
        </div>
      )}
    </>
  );
}

export default Home;
