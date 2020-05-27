/**
 * Component short description
 *
 * @see COMPONENT_NAME.md for details
 */

/**
 * Imports React and third party packages
 */
import React from "react";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */

/**
 * Imports data
 */
import { propTypes, defaultProps } from "./COMPONENT_NAME.data";

/**
 * Imports Material UI components
 */
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

/**
 * Imports translations
 */
import i18n from "../../../i18n";
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
 * Styles the component
 */
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    border: "1px solid",
  },
}));

/**
 * Displays the component
 */
const COMPONENT_NAME = (props) => {
  const { container } = useStyles(props);
  const { t } = useTranslation("COMPONENT_NAME");

  return (
    <Grid container>
      <Grid item xs={12} className={clsx(container, "COMPONENT_NAME")}>
        {t("COMPONENT_NAME")}
      </Grid>
    </Grid>
  );
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps,
};
