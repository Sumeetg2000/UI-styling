

import React, { useRef, useState } from "react";
import "../Style/Style.scss";
function Slider() {
  const [slideNumber, setSlideNumber] = useState(0);
  const list = ["first.png", "second.png", "fish.png"];

  const listRef = useRef();
  const handleClick = (direction) => {
    let imageWidth = document.querySelector(".imageAdjust").width + 30;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${
        imageWidth * (-slideNumber + 1)
      }px)`;
    }
    else if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1); 
      listRef.current.style.transform = `translateX(-${
        slideNumber === 0 ? imageWidth : imageWidth * (slideNumber + 1)
      }px)`;
    }
  };

  return (
    <div className="threeGeneration paddTop fs-6">
      <p className="text-center fw-bold text-uppercase" id="action3">
        Famly <span> ● </span> tradition <span> ● </span> expertise
      </p>
      <h2 className="text-center boxHeading fw-bold">
        Three Generations On Your Side
      </h2>
      <span className="d-flex justify-content-center">
        <hr className="line" />
      </span>
      <div>
        <div className="d-flex gap-2 align-items-center handling">
          <div className="taka25 pb-md-0 pb-2" id="divv">
            <div className="textDiv">
              <p className="fw-normal lh-lg text-capitalize">
                Robert Kallenberg left New Jersey for Alaska in 1926, fished for
                sockeye salmon on a wooden sailboat and wrote his master's
                thesis on the conservation of wild fish. Nearly 100 years later,
                the deep connection Robert made with Alaska and one of the
                world's most bountiful, renewable resources lives on.
              </p>
              <div className="middleButton">
                <button className="rounded-3 text-white fw-bold text-uppercase">
                  get to know us
                </button>
              </div>
            </div>
          </div>
          <div className="taka75">
            <div className="WrapperAll">
              <div className="listImg" ref={listRef}>
                {list.map((e, i) => {
                  return (
                    <div
                      key={i}
                      index={i}
                      item={e}
                      className="listItem"
                      style={{ left: i * 344 - 500 + i * 2 }}
                    >
                      <img src={e} alt={e} className="imageAdjust" />
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 pb-3">
                <span
                  className="sliderArroww left poi"
                  onClick={() => handleClick("left")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
                <span
                  className="sliderArroww right ms-sm-5 ms-3 poi"
                  onClick={() => handleClick("right")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
