import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <>
      <div className="sponsor-container">
        <div className="sponsor-wrapper">
          <h1 className="sponsor-heading">our sponsors</h1>
          <div className="sponsorbox1">
            <img
              src={require("../Home/images/10.png")}
              style={{ height: 210 }}
            />
            <div className="sponsortxt">
              <h4
                style={{
                  color: `rgb(15, 15, 134)`,
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                Coding Ninja{" "}
              </h4>
              Coding Ninjas is a place that trains passionate people in various
              technologies. Our core programs are intensive, immersive training
              that transforms people into outstanding developers. The training
              is provided by expert faculties who have graduated from esteemed
              Universities such as Stanford, IITs and IITs. They have valuable
              teaching experience and extensive knowledge which they share with
              students to guide them in becoming a great programmer or a
              developer."
            </div>
          </div>

          <div className="sponsorbox1">
            <img
              src={require("../Home/images/40.png")}
              style={{ height: 210 }}
            />
            <div className="sponsortxt">
              <h4
                style={{
                  color: `rgb(15, 15, 134)`,
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                Zuno{" "}
              </h4>
              Zuno is a platform that offers paid internships and jobs for
              freshers. With thousands of openings on our platform, we are on
              our way to helping students and fresh graduates find the right
              career opportunities to kickstart their careers.
            </div>
          </div>

          <div className="sponsorbox1">
            <img
              src={require("../Home/images/20.png")}
              style={{ height: 210 }}
            />
            <div className="sponsortxt">
              <h4
                style={{
                  color: `rgb(15, 15, 134)`,
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                Microsoft{" "}
              </h4>
              Microsoft Corporation is an American multinational technology
              company that develops, licenses, and sells computer software,
              consumer electronics, and personal computers. It is best known for
              its Windows operating system, Microsoft Office Suite, and Xbox
              gaming console.
            </div>
          </div>
          <div className="sponsorbox1">
            <img
              src={require("../Home/images/30..png")}
              style={{ height: 210 }}
            />
            <div className="sponsortxt">
              <h4
                style={{
                  color: `rgb(15, 15, 134)`,
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                Wayspire{" "}
              </h4>
              "WAYSPIRE ED-TECH PVT LTD is a dedicated E-learning platform to
              creating a community of lifelong learners. An E-learning platform
              with the goal of competence to students for the workforce and
              assisting you in landing your desired Job/ University.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
