import React from "react";
import { MapContext } from "react-mapbox-gl";

export const PerspectiveControl = ({ currentPosition }) => {
  const map = React.useContext(MapContext);

  function resetPitch() {
    map.setPitch(0);
  }

  React.useEffect(() => {
    if (currentPosition.long && currentPosition.lat) {
      map.panTo([currentPosition.long, currentPosition.lat]);
    }
  }, [currentPosition]);

  React.useEffect(() => {
    if (!map) {
      return;
    }

    map.on("click", resetPitch);
    map.on("contextmenu", resetPitch);

    return () => {
      map.off("click", resetPitch);
      map.off("contextmenu", resetPitch);
    };
  }, [map]);

  return null;
};
