import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './style';

const TripInfoCardComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>test</CardContent>
    </Card>
  );
};

export default TripInfoCardComponent;
