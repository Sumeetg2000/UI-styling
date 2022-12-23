import React from "react";
import { Row } from "react-bootstrap";
import "../Styles/MainScreen.scss";
function MainScreen() {
  return (
    <div className="MainScreenControl">
      <Row className="p-0">
        <div className="col-sm-6  paddTop">
          <p className="ManageTitle fw-bold">
            Building exactly the eCommerce website you want.
          </p>
          <p className="MainDesc">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className='d-flex MainButton'>

          <button className="rounded-5 p-md-3 p-2 MainButton">
            Start a New Store
          </button>
          <a className="ps-md-3 ps-sm-1 p-md-3 p-2 ms-1" href="#">
          or  Customize & Extend  ›
          </a>
          </div>
        </div>
        <div className="col-sm-6 d-sm-block d-none">
        <div className="Wclass"></div>
          <div className="adjustP">
          <img src="sideimg.png" alt="Bigdish" className="image_homeScreen" />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default MainScreen;
