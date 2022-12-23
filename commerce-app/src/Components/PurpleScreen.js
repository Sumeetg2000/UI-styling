import React from "react";
import "../Styles/PurpleScreen.scss";
function PurpleScreen() {
  return (
    <div className="PurpleScren" id="action2">
      <div className="clipPathPurple bg-light"></div>
      <div className="FirstPhase">
        <span className="circleFirst position-relative">
          <img src="purplesmall.svg" alt="crcle" width="40" />
        </span>
        <span className="bigCircle position-absolute "></span>
        <span className="dotimages position-absolute"></span>
        <div className="adjustFirst d-flex">
          <img src="purpleFirst.png" alt="first" className="FirstPurpleimg position-relative" />
          <div className="ps-md-5 pt-sm-1  textAdjust">
            <h3 className="fw-bold text-light">Develop </h3>
            <h3 className="fw-bold text-light">Without Limits</h3>
            
            <p className="paraadjust fw-light text-light">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>

            <button className="firstButtonP ">Read the Documentation</button>
          </div>
          <div className="imageBackground">
          </div>
        </div>
      </div>
      <div className="secondPhase">
        <div className="secondManage mx-md-auto d-flex">
          <div className="secondText">
            <h3 className="fw-bold text-light" >Know our 
            </h3>
            <h3 className="fw-bold text-light">Global Community</h3>
            <p className="fw-light text-light">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <button className="seondButtonP">Read the  Documentation</button>

          </div>
          <span className="smallCircleUp"></span>
          <span className="BigCircleUp"></span>
          <span className="seconddotUp"></span>
          <div className="secondImg">
            
            <img src="purpleSecond.png" alt="purpleSecond.png"/>
          </div>
        </div>
      </div>
      <div className="clipBottomPurple bg-light position-relative"></div>
    </div>
  );
}

export default PurpleScreen;

// clip-path: polygon(0% 0%, 25% 5%, 40% 19%, -110% 2%, 75% 3%, 100% 0%, 100% 85%, 84% 83%, 61% 80%, 41% 80%, 20% 82%, 0% 85%);
