import React, { useRef } from "react";
import ReactMapboxGl, { Layer, Feature, MapContext, Popup } from "react-mapbox-gl";
import mapboxgl from "mapbox-gl";

const POSITION_CIRCLE_PAINT = {
  "circle-stroke-width": 2,
  "circle-radius": 8,
  "circle-blur": 0.15,
  "circle-color": "#3770C6",
  "circle-stroke-color": "white",
};

export const MapDronePoints = (props) => {
  const map = React.useContext(MapContext);
  React.useEffect(() => {
    if (!map) {
      return;
    }

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    map.on('mouseenter', 'position-marker', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;
      var popupLabels = ""


      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates).addTo(map)

      for (var key in properties) {
        var title = key + ": "
        if (key === "DroneID") {
          title = "<strong>" + properties[key] + "</strong><br>"
          popupLabels += title
        }
        else if (key !== "id") {
          popupLabels += title + properties[key] + "<br>"
          console.log(properties[key])
          popup.setHTML(popupLabels)
        }

      }

    })

    map.on('click', 'position-marker', (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates
      });
    });

    map.on('mouseenter', 'position-marker', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'position-marker', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    })

  }, [map]);
  return (<Layer type="circle" id="position-marker" paint={POSITION_CIRCLE_PAINT}>
    {props.droneLocations.map((loc, index) => (
      <Feature key={index} coordinates={[loc.long, loc.lat]} properties={{ "DroneID": loc.id, "longitude": loc.long, "latitude": loc.lat }} />
    ))}
  </Layer>);
};
