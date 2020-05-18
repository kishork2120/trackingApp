import * as React from "react";
import { Avatar, Popover } from "@material-ui/core";

const MapPopupComponent: React.FC = () => {
  return (
    <>
      <Popover
        id={Math.random().toString()}
        open={false}
        onClose={() => true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        test
      </Popover>
      <Avatar alt="Remy Sharp" src="/src/public/images/caricon.png" />
    </>
  );
};

export default MapPopupComponent;
