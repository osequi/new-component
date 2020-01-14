import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { en_en } from "./COMPONENT_NAME.lang.en-en";
import { nl_nl } from "./COMPONENT_NAME.lang.nl-nl";
import { nl_be } from "./COMPONENT_NAME.lang.nl-be";

i18n.addResourceBundle("en-EN", "COMPONENT_NAME", en_en);
i18n.addResourceBundle("nl-NL", "COMPONENT_NAME", nl_nl);
i18n.addResourceBundle("nl-BE", "COMPONENT_NAME", nl_be);

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({
  border: "1px solid",
  padding: "1.25em",
  margin: "1.25em"
}));

/**
 * Displays the component
 */
const COMPONENT_NAME = props => {
  const { t } = useTranslation("COMPONENT_NAME");
  return <div className="COMPONENT_NAME">{t("COMPONENT_NAME")}</div>;
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps
};
