import React from "react";
import PropTypes from "prop-types";

import "./Panel.scss";

function Panel({ title, children }) {
  return (
    <div className="panel-container">
      <div className="children-container">{children}</div>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

Panel.defaultProps = {
  title: undefined,
  children: undefined,
};

export default Panel;
