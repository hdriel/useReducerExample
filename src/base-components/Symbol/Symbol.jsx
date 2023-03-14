import React from "react";
import PropTypes from "prop-types";

import "./Symbol.scss";

function Symbol({ prop }) {
  return <div></div>;
}

Symbol.propTypes = {
  prop: PropTypes.array,
};

Symbol.defaultProps = {
  prop: undefined,
};

export default Symbol;
