import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import clsx from "clsx";

interface Props {
  handleDrawerOpen: () => void;
  open: Boolean;
}

const ToolBarComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: props.open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Tracking
      </Typography>
    </Toolbar>
  );
};

export default ToolBarComponent;
