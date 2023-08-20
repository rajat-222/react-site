import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <video className="bg-video" autoPlay muted loop>
          <source src={require("./images/circuit-bg.mp4")} type="video/mp4" />
        </video>

        <div className="content-container">
          <div className="content-wrapper">
            <h1 className="mtc-heading">
              microsoft <br />
              technical <br />
              community
            </h1>
            <div className="logo-container">
              <h1 id="page-logo">
                <img src={require("./images/Mtc.png")} alt="mtclogo" />
              </h1>
            </div>
          </div>
          <div className="buttons-container">
            <button>register</button>
            <button>cognition 2.0</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
