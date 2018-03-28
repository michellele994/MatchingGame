import React from "react";

const Header = (props) => (
    <div>
      <h1>Save Your Farm!</h1>
      <p>
          Collect all of your animals before the alien abducts them!
          <br />Once you saved one, don't waste time clicking on it again or else the alien will abduct the others!
      </p>
      Level: {props.level}
    </div>
  );

export default Header;