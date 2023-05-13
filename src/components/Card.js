import svg from "../assets/images/SVGs/No-Image.svg";

function Card(props) {
  return (
    <>
      <div className="col-6 mb-5 card">
        {props.data.thumbnail ? (
          <img className="cardImg" src={props.data.thumbnail} alt="card-img" />
        ) : (
          <img className="cardImg" src={svg} alt="card-img" />
        )}

        <div className="card-body">
          <h1 className="card-title white">{props.data.name}</h1>
          <p className="card-text text white">{props.data.description}</p>

          <div
            className="progress mt-5"
            style={{ borderRadius: "10px", backgroundColor: "#F2902F" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={props.data.funded}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: `${props.data.funded}%`,
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            ></div>
          </div>
          <div className="progress-text white bold mb-4">
            <span>{props.data.funded}%</span>
            <span className="end">
              {((props.data.funded / 100) * props.data.amount).toFixed(2)} ETH
              FUNDED
            </span>
          </div>

          <a href="#" className="btn btnCard mt-3">
            DONATE
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
