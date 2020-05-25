import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * Imports project specific components and hooks
 */

/**
 * Imports Material UI components
 */
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

/**
 * Imports translations
 */
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { ro_ro } from "./COMPONENT_NAME.lang.ro-ro";
import { hu_hu } from "./COMPONENT_NAME.lang.hu-hu";
import { en_us } from "./COMPONENT_NAME.lang.en-us";
import { de_de } from "./COMPONENT_NAME.lang.de-de";

i18n.addResourceBundle("ro-RO", "COMPONENT_NAME", ro_ro);
i18n.addResourceBundle("hu-HU", "COMPONENT_NAME", hu_hu);
i18n.addResourceBundle("en-US", "COMPONENT_NAME", en_us);
i18n.addResourceBundle("de-DE", "COMPONENT_NAME", de_de);

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    border: "1px solid"
  }
}));

/**
 * Displays the component
 */
const COMPONENT_NAME = props => {
  const { container } = useStyles(props);
  const { t } = useTranslation("COMPONENT_NAME");

  return (
    <Grid className={clsx(container, "COMPONENT_NAME")}>
      {t("COMPONENT_NAME")}
    </Grid>
  );
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps
};
