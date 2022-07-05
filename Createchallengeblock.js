import React from "react";
import style from "./AppStyle.css";
import Rocketimage from "./assets/icons/PicsArt_04-14-04.42 1.svg";
export default function Createchallengeblock() {
  return (
    <>
      <div className="Random">
        <div className="container2">
          <div className="textInContainer">
            Accelerate Innovation with Global AI Challenges
          </div>
          <div className="textInContainer2">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </div>
          <div className="smallRectangle"></div>
          <div className="imageIncontainer2">
            <img className="rocket" src={Rocketimage} alt="" />
          </div>
          <div className="buttonInContainer2">
            <button type="button" class="btn btn-light">
              Create Challenge
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
