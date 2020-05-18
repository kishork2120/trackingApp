import * as React from 'react';
import { useStyles } from './style';
import TripInfoCardComponent from '../TripInfoCard/tripInfoCard.component';
import MapComponent from '../MapComponent/map.component';

const TrackBodyContent: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}>
        <TripInfoCardComponent/>
        <MapComponent/>
      </div>
    </main>
  );
};

export default TrackBodyContent;
