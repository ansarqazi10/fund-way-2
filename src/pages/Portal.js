import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import svg from "../assets/images/SVGs/portal1.svg";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import ListAProject from "../components/ListAProject";
import projectService from "../services/project";
import useStore from "../store/store";

function Portal() {
  let [projects, setProjects] = useState([]);
  let [showList, setShowList] = useState(false);

  const { user } = useStore((state) => state);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isId = window.location.href.split("/").pop();
    if (isId !== "list-a-project") getProjects();
    else setShowList(false);
  }, [location.pathname]);

  function getProjects() {
    let userId = user._id;
    projectService.getByUserId(userId).then((result) => {
      setProjects(result.data);
      setShowList(true);
    });
  }

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="portal">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="white mt-4">
              Welcome to <span className="yellow">your</span> portal
            </h1>
            <p className="white mt-4">
              Here you can manage your listed projects, see the progress and
              donate to other listers
            </p>
          </div>
        </div>

        <div className="row user">
          <div className="col-2">
            <img src={svg} width={92} height={92} className="userImg" />
          </div>
          <div className="col-3 red bold info">
            <p>{user.name}</p>
            <p>{user.cnic}</p>
          </div>
          <div className="col-7 btns">
            <button className="btnWhite bW1 bold red bold24">
              Connect wallet
            </button>
            <button className="btnWhite bW2 bold red bold24" onClick={logout}>
              Logout
            </button>
          </div>
        </div>

        {showList ? (
          <>
            <h2 className="text-center white">Your listed project(s)</h2>
            {projects !== null && projects.length > 0 ? (
              <div className="row text-center white userProjects mt-5">
                {projects.map((elem) => {
                  return <Card data={elem} key={elem._id} />;
                })}
              </div>
            ) : (
              <div className="row text-center">
                <div className="col red bold18 mt-4 userProjects">
                  Your listed projects will show here. Create a new proejct by
                  the clicking the button down below.
                </div>
              </div>
            )}

            <div className="row mb-3 mt-5 d-flex justify-content-center">
              <Link to="/portal/list-a-project" className="btn btnCardB mt-3">
                <h2>List a project</h2>
              </Link>
              <a href="#" className="btn btnCardB mt-3">
                <h2>Fund a project</h2>
              </a>
            </div>
          </>
        ) : (
          <>
            <ListAProject />
          </>
        )}
      </div>
    </>
  );
}

export default Portal;
