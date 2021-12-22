import React from "react";
import { useHistory } from "react-router-dom";
import "../css/startingpage.css";
import clouds from "../logo/clouds64px.png";
import drop from "../logo/drop32px.png";

function StartingPage() {
  let history = useHistory();

  function handleClick() {
    history.push("/sound");
  }

  return (
    <body id="startingpage-body">
      <main id="startingpage-main">
        <div id="app-info">
          <h1>Rain Drop</h1>
          <p>
            <b>Cojan Bogdan</b>
          </p>
        </div>
        <div id="logo-startingpage">
          <div>
            <img src={clouds} />
          </div>
          <div>
            <img src={drop} />
          </div>
        </div>
        <button id="start" onClick={handleClick}>
          <span>
            <b>Start</b>
          </span>
        </button>
      </main>
    </body>
  );
}

export default StartingPage;
