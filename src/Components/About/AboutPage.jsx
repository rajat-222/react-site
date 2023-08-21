import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <div className="about-container">
        <div className="abt-content-container">
          <h1 className="about-heading">about us</h1>
          <div className="abt-content-wrapper">
            <div className="video-holder">
              <video className="about-video" autoPlay loop muted>
                <source src={require("./Assets/About.mp4")} type="video/mp4" />
              </video>
            </div>
            <div className="about-info">
              <p>
                Microsoft Technical Community was established in February 2018
                with the vision of “Innovating, Inventing and Improvising” to
                educate fellow computer science enthusiasts about various
                aspects of the technical world. The goal was and is to create
                professionals out of amateurs and to teach not just Microsoft
                technologies but anything that is required for students to excel
                in their careers. We have come a long way since then, and still
                have many more goals to reach. <br /> <br /> Microsoft Technical
                Community only focuses on technical events and approaches them
                with complete professionalism. ‘Pathshala’ sessions, ‘C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
