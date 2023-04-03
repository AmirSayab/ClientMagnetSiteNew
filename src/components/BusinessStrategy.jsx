import React from "react";
import "../styles/businessstrategy.css";
import Saass4 from "../images/Saass4.png";
import Saass5 from "../images/Saass5.png";
import Saass6 from "../images/Saass6.png";
import Button from "./Button";

export default function BusinessStrategy() {
  return (
    <div className="business-cont">
      <h1>We help your business grow faster.</h1>
      <p className="main-p">
      Discover the Top 3 Features of Our Product: Helping You Succeed Efficiently and Effectively.
      </p>
      <div className="business-card-cont">
        <div>
          <img src={Saass4} alt="" />
          <h3>Achieving more!</h3>
          <p>
          ClientMagnet boosts outreach, automates campaigns, personalizes messages, increases sales.
          </p>
          <a href="">Read more</a>
        </div>
        <div>
          <img src={Saass5} alt="" />
          <h3>Saving more!</h3>
          <p>
          ClientMagnet streamlines outreach, reduces carbon footprint, and fights climate change.
          </p>
          <a href="">Read more</a>
        </div>
        <div>
          <img src={Saass6} alt="" />
          <h3>Sustaining more!</h3>
          <p>
          ClientMagnet boosts eco-friendliness, streamlines outreach, promotes sustainability for businesses.
          </p>
          <a href="">Read more</a>
        </div>
      </div>
      <Button className="btn1" name="More About Platform" />
    </div>
  );
}
