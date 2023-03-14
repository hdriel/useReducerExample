import React from "react";
import PropTypes from "prop-types";

import "./text.scss";

function Text({ label }) {
  return <h2 className="text-styled">{label}</h2>;
}

Text.propTypes = {
  prop: PropTypes.array,
};

Text.defaultProps = {
  prop: undefined,
};

export default Text;
