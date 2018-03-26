import React from "react";

const Header = (props) => (
    <div>
      <h1>Matching Game</h1>
      <p>
          Click on an image to earn points, but do not click on an image more than once!
      </p>
      Level: {props.level}
    </div>
  );

export default Header;