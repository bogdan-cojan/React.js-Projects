import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/rainpage.css";
import go_back from "../buttons/back48px.png";
import play from "../buttons/play64px.png";
import pause from "../buttons/pause64px.png";
import volume from "../buttons/volume48px.png";

function RainPage() {
  let history = useHistory();

  function handleClick() {
    history.push("/sound");
  }

  return (
    <body id="rainpage-body">
      <div id="wave" />
      <main id="rainpage-main">
        <div id="arrow-back" onClick={handleClick}>
          <img src={go_back} />
        </div>
        <div id="play_button">
          <img src={play} />
        </div>
        <div id="pause_button">
          <img src={pause} />
        </div>
        <div id="volume_button">
          <img src={volume} />
        </div>
        <div id="drop-animation">
          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="rain-drop">
            <div class="drop-rain"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default RainPage;
