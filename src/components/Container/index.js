import PropTypes from "prop-types";
import "./Container.css";
import React, { useMemo } from "react";

const Container = ({
  children,
  backgroundColor,
  additionalStyles,
  ...props
}) => {
  let containerClassName = "container";
  // get classes and classes with values
  const keys = Object.keys(props).filter(
    (key) => typeof props[key] === "boolean" && props[key],
  );
  const classNames = useMemo(
    () =>
      keys?.reduce((prevKey, currKey, i) => {
        return (prevKey += ` --${currKey}`);
      }, ""),
    [keys],
  );
  return (
    <div
      className={containerClassName + classNames}
      style={{ backgroundColor, ...additionalStyles }}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  fullscreen: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.element,
  backgroundColor: PropTypes.string,
  fullwidth: PropTypes.bool,
  row: PropTypes.bool,
  additionalStyles: PropTypes.object,
};

Container.defaultProps = {
  backgroundColor: "default",
  additionalStyles: {},
};

export default Container;
