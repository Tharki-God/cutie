import React from "react";
import Constants from "../../../constants";
import { ProfileData } from "../../Types";
import "./AboutMe.css";
export default React.memo(({ age }: ProfileData) => {
  return (
    <div className="card">
      <div className="card-title">@{Constants.USER} &gt; about me</div>
      <div className="about-me">
        <header className="heading">about me</header>
        <div className="bio">
          <ul>
            <li>⊰ {age} years old</li>
            <li>⊰ uwu girl</li>
            <li>⊰ really loved by a certain somebody</li>
            <li>⊰ struggles with life</li>
            <li>⊰ skill issue is being indian woman</li>
            <br />
            <br />
            <li>Author's note -</li>
            <li>She is Really Really Cute</li>
            <li>
              Made For Love By Love.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
