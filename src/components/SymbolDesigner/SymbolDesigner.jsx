import React from "react";
import PropTypes from "prop-types";

import "./SymbolDesigner.scss";

function SymbolDesigner({ prop }) {
  return <div></div>;
}

SymbolDesigner.propTypes = {
  prop: PropTypes.array,
};

SymbolDesigner.defaultProps = {
  prop: undefined,
};

export default SymbolDesigner;
