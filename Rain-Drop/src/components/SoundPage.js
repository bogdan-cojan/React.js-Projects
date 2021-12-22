import React from "react";
import { useHistory } from "react-router-dom";
import "../css/soundpage.css";
import clouds from "../logo/clouds48px.png";
import drop from "../logo/drop24px.png";

function SoundPage() {
  let history = useHistory();

  function handleClick() {
    history.push("/sound/rain");
  }

  return (
    <body id="soundpage-body">
      <div id="wave" />
      <main id="soundpage-main">
        <div id="card-rain" onClick={handleClick}>
          <div>
            <h1>
              <b>RAIN</b>
            </h1>
          </div>
          <div id="rain-animation">
            <div id="cloud">
              <span class="shadow"></span>
              <div class="rain">
                <div class="drop d1"></div>
                <div class="drop d2"></div>
                <div class="drop d3"></div>
                <div class="drop d4"></div>
                <div class="drop d5"></div>
                <div class="drop d6"></div>
                <div class="drop d7"></div>
                <div class="drop d8"></div>
                <div class="drop d9"></div>
                <div class="drop d10"></div>
                <div class="drop d11"></div>
                <div class="drop d12"></div>
                <div class="drop d13"></div>
                <div class="drop d14"></div>
                <div class="drop d15"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="credits">
          <div id="logo-credits">
            <div>
              <img src={clouds} />
            </div>
            <div>
              <img src={drop} />
            </div>
          </div>
          <h1>Rain Drop</h1>
        </div>
      </main>
    </body>
  );
}

export default SoundPage;
