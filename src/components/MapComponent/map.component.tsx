import * as React from "react";
import GoogleMapReact from "google-map-react";
import TrackService from "../../services/track.service";
import MapPopupComponent from "../MapPopup/mapPop.component";

const trackService = new TrackService();

const MapComponent: React.FC = () => {
  const [driverList, setDriverList] = React.useState([]);
  const defaultProps = {
    center: {
      lat: 11.025723,
      lng: 77.016952,
    },
    zoom: 11,
  };

  const getDriverList = async () => {
    const response = await trackService.getAllDriverList();
    if (response.status === 200) {
      setDriverList(response.driverList);
    }
  };

  React.useEffect(() => {
    getDriverList();
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD00e9bWfZvkuOG1vlx6TofFGXRd--kb5M" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {driverList &&
          driverList.map((d) => (
            <MapPopupComponent
            lat={d?.loc?.coordinates[1]}
            lng={d?.loc?.coordinates[0]}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
