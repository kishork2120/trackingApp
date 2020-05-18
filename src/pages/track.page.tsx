import * as React from 'react';
import NavBarComponent from '../components/NavBar/navBar.component';
// eslint-disable-next-line max-len
import AppBarWrapperComponent from '../components/AppBarWrapper/appBarWrapper.component';
// eslint-disable-next-line max-len
import TrackBodyContent from '../components/TrackBody/trackBody.component';

const TrackPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppBarWrapperComponent handleDrawerOpen={handleDrawerOpen} open={open} />
      <NavBarComponent handleDrawerClose={handleDrawerClose} open={open} />
      <TrackBodyContent />
    </div>
  );
};

export default TrackPage;
