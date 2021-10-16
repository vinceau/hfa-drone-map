import "mapbox-gl/dist/mapbox-gl.css";

import React from "react";
import ReactMapboxGl, { MapContext } from "react-mapbox-gl";

// eslint-disable-next-line new-cap
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

const MapView = () => {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <MapContext.Consumer>
          {(map) => {
            const data = {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "LineString",
                    coordinates: [[-122.019807, 45.632433]],
                  },
                },
              ],
            };

            map.addSource("trace", { type: "geojson", data: data });
            map.addLayer({
              id: "trace",
              type: "line",
              source: "trace",
              paint: {
                "line-color": "yellow",
                "line-opacity": 0.75,
                "line-width": 5,
              },
            });
            map.panTo(data.features[0].geometry.coordinates[0]);

            map.on("click", async (e) => {
              const { lng, lat } = e.lngLat;
              console.log([lng, lat]);
              data.features[0].geometry.coordinates.push([lng, lat]);
              map.getSource("trace").setData(data);
            });
          }}
        </MapContext.Consumer>
      </Map>
    </div>
  );
};

export { MapView };
