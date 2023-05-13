import { useEffect, useState } from "react";
import Card from "../components/Card";
import projectService from "../services/project";

function FindaFundraiser() {
  let [keyword, setKeyword] = useState("");
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getProjects();
  }, [keyword]);

  function getProjects() {
    projectService.get({ keyword: keyword }).then((result) => {
      setProjects(result.data);
    });
  }
  return (
    <>
      <div className="row projects text-center white">
        <h2 className="my-5">
          Find a <span className="yellow">Fundraiser</span>
        </h2>
        <input
          type="text"
          placeholder={`Enter text to search from ${projects.length} project(s)...`}
          className="searchbar"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {projects.length > 0 ? (
        <div className="row text-center white userProjects mt-5">
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

export default FindaFundraiser;
