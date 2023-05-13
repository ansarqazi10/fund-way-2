import { useEffect } from "react";
import tnt1 from "../assets/images/SVGs/tnt-1.svg";
import tnt2 from "../assets/images/SVGs/tnt-2.svg";
import tnt3 from "../assets/images/SVGs/tnt-3.svg";
import tnt4 from "../assets/images/SVGs/tnt-4.svg";

function TipsAndTools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="white mx-5 mt-5">
        Tips and <span className="yellow">Tools</span>
      </h1>
      <div className="row">
        <div className="col-6 text tip white">
          <b className="bold">1. Set up a MetaMask wallet:</b> Before you start
          using the fundraiser website, you need to set up a MetaMask wallet.
          This will allow you to make transactions on the Ethereum network
          securely. Make sure you follow the setup instructions carefully and
          keep your private key safe.
        </div>
        <div className="col-6">
          <img src={tnt1} width={510} height={583} />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <img
            src={tnt2}
            width={307}
            height={357}
            style={{ marginTop: "40%" }}
          />
        </div>
        <div className="col-9 text tip yellow" style={{ marginLeft: "-100px" }}>
          <b className="bold">2. Verify the website:</b> Before you list a
          project or donate to a project, make sure that the website is
          legitimate and secure. Check for the website's SSL certificate, read
          reviews, and do your research to ensure the website is trustworthy.
        </div>
      </div>

      <div className="row">
        <div className="col-6 text tip white">
          <b className="bold">3. Create a strong password:</b> When creating a
          password for your MetaMask wallet, make sure it's a strong password
          that's not easy to guess. Use a combination of upper and lower case
          letters, numbers, and symbols.
        </div>
        <div className="col-6"></div>
      </div>

      <div className="row">
        <div className="col-5"></div>
        <div className="col-7 text tip yellow">
          <b className="bold">4. Keep your private key safe:</b> Your MetaMask
          wallet's private key is like your password to access your funds. Make
          sure you keep it safe and never share it with anyone.
        </div>
      </div>

      <div className="row">
        <div className="col-8 text tip white">
          <b className="bold">5. Check the gas price:</b> When making a
          transaction, make sure to check the gas price to ensure that you're
          not overpaying for gas fees. Use a gas price tracker to help you find
          the optimal gas price.
        </div>
        <div className="col-4 mt-5">
          <img src={tnt3} width={391} height={388} />
        </div>
      </div>

      <div className="row">
        <div className="col-10 text tip yellow" style={{ marginTop: "-10%" }}>
          <b className="bold">6. Set a realistic fundraising goal:</b> When
          listing a project, set a realistic fundraising goal. Don't set a goal
          that's too high or too low. Make sure you have a clear plan for how
          you will use the funds.
        </div>
        <div className="col-2"></div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src={tnt4} width={344} height={480} className="m-5" />
        </div>
        <div className="col-8 text tip white mt-3">
          <b className="bold">7. Promote your project:</b> Once you've listed
          your project, promote it on social media and other platforms to
          increase visibility. Encourage your followers to share your project
          with their networks.
        </div>
      </div>
    </>
  );
}

export default TipsAndTools;
