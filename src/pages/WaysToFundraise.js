import { useEffect } from "react";
import wtf1 from "../assets/images/SVGs/WTF-1.svg";
import wtf2 from "../assets/images/SVGs/WTF-2.svg";
import wtf3 from "../assets/images/SVGs/WTF-3.svg";

function WaysToFundraise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row waysToFundraise">
        <div className="col">
          <h1 className="white mx-5 mt-5">
            Ways to <span className="yellow">Fundraise</span>
          </h1>

          <h2 className="yellow">1. Create an account</h2>
          <p className="white">
            <img src={wtf1} width={444} height={458} className="wtfImage" />
            Before you start donating or fundraising, you need to{" "}
            <a to="#" className="white link">
              create an account or Login.
            </a>{" "}
            This is to make sure that the integrity of the fundraiser and the
            website is maintained.
          </p>

          <h2 className="yellow">2. Connet your Wallet</h2>
          <p className="white">
            After creating an account, you will need to{" "}
            <a to="#" className="white link">
              connect your Metamask wallet
            </a>{" "}
            to your account. You will now be able to list projects, and donate
            to different project of your choice.
          </p>

          <h2 className="yellow">3. Choosing to list</h2>
          <p className="white">
            Once you decide that you want to list a project to be funded on the
            website, you will need to{" "}
            <a to="#" className="white link">
              provide some information
            </a>{" "}
            (basic + legal). This is to make sure there are no fraudulent
            activities (scams). This is also make you feel safer while donating
            because you will be certain that your money is going to the needy
            and not some greedy scammer.
          </p>

          <h2 className="yellow">4. Validation period</h2>
          <p className="white">
            <img src={wtf2} width={377} height={357} className="wtfImage" />
            Before we just blindly list any project on our webpage, we need to
            make sure that it is 100% legit, to make that sure we will require
            all listers to provide us with{" "}
            <a to="#" className="white link">
              some legal documents
            </a>{" "}
            (Passport #, NIC, Phone #, Organization name, Request letter etc.).
            All of this will ensure that the lister is legit and intends to
            either get help from that money or help others.
            <br />
            <br />
            After all this has happened, your data (information and documents)
            will be sent to our database for validation, after the data has been{" "}
            <a to="#" className="white link">
              manually reviewed by our team member(s)
            </a>{" "}
            . It will be approved and listed on our website.
            <br />
            <br />
            KEEP IN MIND, in case of an attempt to provide counter-fit
            documents, lying, providing false information or unrealistic funding
            request, the user’s account may be{" "}
            <a to="#" className="white link">
              suspended or permanently deleted.
            </a>{" "}
          </p>

          <img src={wtf3} height={260} width={1284} className="wtfImage2" />
          <h2 className="yellow">5. Done</h2>
          <p className="white">
            Now that your project has been approved and listen on our website,
            it is all set and ready to be funded. Your project will be visible
            to our users. and you can share its link with your family, friends,
            community to get those interactions and donations up. Once the
            target has been met, the project will be unlisted and the donations
            will be sent to the lister.
          </p>
        </div>
      </div>
    </>
  );
}

export default WaysToFundraise;
