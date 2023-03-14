import React from "react";
import PropTypes from "prop-types";

import "./Symbol.scss";

function SymbolConnected({ shape, color }) {
  return <div></div>;
}

SymbolConnected.propTypes = {
  shape: PropTypes.string,
  color: PropTypes.string,
};

SymbolConnected.defaultProps = {
  shape: "triangle",
  color: "blue",
};

export default SymbolConnected;
