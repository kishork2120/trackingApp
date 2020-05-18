import * as React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import { useStyles } from './style';
import ToolBarComponent from '../ToolBar/toolBar.component';

interface Props {
  handleDrawerOpen: () => void;
  open: Boolean;
}

const AppBarWrapperComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <ToolBarComponent
        handleDrawerOpen={props.handleDrawerOpen}
        open={props.open}
      />
    </AppBar>
  );
};

export default AppBarWrapperComponent;
