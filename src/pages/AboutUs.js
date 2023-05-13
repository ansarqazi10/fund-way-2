import { useEffect } from "react";
import aboutUs1 from "../assets/images/SVGs/about-us-1.svg";
import aboutUs2 from "../assets/images/SVGs/about-us-2.svg";
import aboutUs3 from "../assets/images/SVGs/about-us-3.svg";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row mb-5">
        <div className="col-6">
          <h1 className="white m-5">
            About <span className="yellow">Us</span>
          </h1>
          <div className="white mt-5 aboutTxt">
            <h2 className="white">The Idea</h2>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. <br />
            <br />
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquen.
          </div>
        </div>
        <div className="col-6">
          <img src={aboutUs1} width={720} height={740} />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-6">
          <img src={aboutUs2} width={725} height={832} />
        </div>
        <div className="col-6 white aboutTxt">
          <h2 className="white">Helping the community</h2>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. <br />
          <br />
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquen.
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-6">
          <div className="white mt-5 aboutTxt">
            <h2 className="white">Keeping up with the trends</h2>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. <br />
            <br />
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquen.
          </div>
        </div>
        <div className="col-6 pt-5">
          <img src={aboutUs3} width={620} height={680} />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
