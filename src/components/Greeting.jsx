import React from "react";
import propTypes from "prop-types";

function Greeting(props) {
  return (
    <div>
      <h1>
        Hello {props.timeOfDay}, {props.name}{" "}
      </h1>
    </div>
  );
}

Greeting.propTypes = {
  timeOfDay: propTypes.string,
  name: propTypes.string,
};

Greeting.defaultProps = {
  timeOfDay: "Morning",
  name: "User",
};

export default Greeting;
