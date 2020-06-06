import React from "react";

import "./app.css";
import reactLogo from "./assets/react.svg";
import yarn from "./assets/yarn.svg";
import webpack from "./assets/webpack.svg";

const App = () => {
  return (
    <React.Fragment>
      <div className="reactLogoContainer">
        <img className="reactLogo" src={reactLogo} alt="react logo" />
      </div>
      <div className="logosContainer">
        <img className="yarnLogo" src={yarn} alt="yarn" />
        <img className="webpackLogo" src={webpack} alt="webpack logo" />
      </div>
    </React.Fragment>
  );
};

export default App;

// export default () => {
//   const myIcon = new Image();
//   myIcon.src = svg;
//   element.appendChild(myIcon);
// };
