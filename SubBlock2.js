import React from "react";
import style from "./AppStyle.css";
import img1 from "./assets/icons/Group 1000002515.svg";
import img2 from "./assets/icons/Group 1000002516.svg";
import img3 from "./assets/icons/Group 1000002518.svg";

export default function SubBlock2() {
  return (
    <>
      <div>
        <div className="container3">
          <div className="smallImage1">
            <img className="img1" src={img1} alt="" />
          </div>
          <div className="smallImage2">
            <img className="img2" src={img2} alt="" />
          </div>
          <div className="smallImage3">
            <img className="img3" src={img3} alt="" />
          </div>
        </div>
        <div className="textHundred">100K+</div>
        <div className="smallText1">AI model submissions</div>
        <div className="textHundred2">50K+</div>
        <div className="smallText2">Data Scientists</div>
        <div className="textHundred3">100+</div>
        <div className="smallText3">AI Challenges hosted</div>
        <div className="smallRectangle1"></div>
        <div className="smallRectangle2"></div>
      </div>
    </>
  );
}
