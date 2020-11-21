import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the COMPONENT_NAME type.
 * @category Components
 * @example
 */
export type TCOMPONENT_NAME = {} & typeof COMPONENT_NAMEDefaultProps;

/**
 * Defines the COMPONENT_NAME default props.
 * @category Components
 * @example
 */
const COMPONENT_NAMEDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the COMPONENT_NAME.
 * @category Components
 * @component
 * @example
 * return <COMPONENT_NAME />
 */
const COMPONENT_NAME = (props: TCOMPONENT_NAME) => {
  const { containerKlass } = useStyles(container, props);

  return (
    <div className={cx("COMPONENT_NAME", containerKlass)}>COMPONENT_NAME</div>
  );
};

COMPONENT_NAME.defaultProps = COMPONENT_NAMEDefaultProps;

export default COMPONENT_NAME;
export { COMPONENT_NAMEDefaultProps };
