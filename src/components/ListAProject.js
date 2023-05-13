import { useNavigate } from "react-router-dom";
import { useState } from "react";
import projectService from "../services/project";
import useStore from "../store/store";

function ListAProject() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [amount, setAmount] = useState("");
  let [wallet, setWallet] = useState("");
  let [legalFile, setLegalFile] = useState();
  let [thumbnail, setThumbnail] = useState();
  let [error, setError] = useState("");

  const { user } = useStore((state) => state);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name === "" || description === "" || amount === "" || wallet === "") {
      setError("Please enter all the required fields.");
      return;
    }

    let data = {
      name,
      description,
      amount,
      wallet,
      legalFile,
      thumbnail,
      userId: user._id,
    };
    projectService.create(data).then((result) => {
      if (result.error) {
        setError(result.error);
        return;
      }
      navigate(`/portal/${user._id}`);
    });
  };

  return (
    <>
      <div className="row d-flex justify-content-center">
        <h2 className="white bold text-center">List a project</h2>
        <div className="box boxL">
          <form>
            <div className="form-group white bold mb-3">
              <label htmlFor="name" className="p-2 input">
                Name of the project
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onInput={(e) => setError("")}
                required
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="cnic" className="p-2 input">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onInput={(e) => setError("")}
                required
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="email" className="p-2 input">
                Amount Needed (ETH)
              </label>
              <input
                type="email"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onInput={(e) => setError("")}
                required
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="wallet" className="p-2 input">
                Metamask Wallet address
              </label>
              <input
                type="text"
                className="form-control"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                onInput={(e) => setError("")}
                required
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="file" className="p-2 input">
                Attach your legal document file
              </label>
              <input
                type="text"
                className="form-control"
                value={legalFile}
                onChange={(e) => setLegalFile(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
            <div className="form-group white bold mb-3">
              <label htmlFor="thumbnail" className="p-2 input">
                Attach your Project's Thumbnail
              </label>
              <input
                type="text"
                className="form-control"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                onInput={(e) => setError("")}
              />
            </div>
          </form>
          <p className="bold24 red">{error}</p>
        </div>
        <button
          type="submit"
          className="btn btnProject mt-5 mb-5"
          onClick={handleSubmit}
        >
          <h2>List a project</h2>
        </button>
      </div>
    </>
  );
}

export default ListAProject;
