import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapContext } from "react-mapbox-gl";

function format(coordinates) {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates,
    },
    properties: {
      description: JSON.stringify(coordinates),
    },
  };
}

export const MapFeatures = () => {
  const selected = useRef(null);

  const map = React.useContext(MapContext);
  React.useEffect(() => {
    if (!map) {
      return;
    }

    const trace = {
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

    const trace2 = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-122.019807, 45.632433],
          },
          properties: {
            description: "hello",
          },
        },
      ],
    };

    map.addSource("trace", { type: "geojson", data: trace });
    map.addSource("trace2", { type: "geojson", data: trace2 });

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
    // map.addLayer({
    //   id: "trace2",
    //   type: "line",
    //   source: "trace2",
    //   paint: {
    //     "line-color": "purple",
    //     "line-opacity": 0.75,
    //     "line-width": 5,
    //   },
    // });
    map.addLayer({
      id: "trace2",
      type: "circle",
      source: "trace2",
      paint: {
        "circle-radius": 6,
        "circle-color": "#B42222",
      },
    });
    map.panTo(trace.features[0].geometry.coordinates[0]);

    map.on("click", (e) => {
      const bbox = [
        [e.point.x - 5, e.point.y - 5],
        [e.point.x + 5, e.point.y + 5],
      ];
      // Find features intersecting the bounding box.
      const selectedFeatures = map.queryRenderedFeatures(bbox, {
        layers: ["trace2"],
      });

      // Copy coordinates array.
      if (selectedFeatures.length > 0) {
        const coordinates = selectedFeatures[0].geometry.coordinates.slice();
        const description = selectedFeatures[0].properties.description;

        console.log(selectedFeatures[0]);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
      } else {
        console.log(e);
        const { lng, lat } = e.lngLat;
        console.log([lng, lat]);

        if (selected.current) {
          console.log("selected", selected.current);
          console.log(JSON.stringify(trace2));
          const index = trace2.features.findIndex((el) => el.properties.description === selected.current);
          console.log(index);
          trace.features[0].geometry.coordinates.splice(index + 1, 0, [lng, lat]);
          trace2.features.splice(index + 1, 0, format([lng, lat]));
          selected.current = null;
        } else {
          trace.features[0].geometry.coordinates.push([lng, lat]);
          trace2.features.push(format([lng, lat]));
        }

        map.getSource("trace").setData(trace);
        map.getSource("trace2").setData(trace2);
      }
    });

    map.on("contextmenu", (e) => {
      const bbox = [
        [e.point.x - 5, e.point.y - 5],
        [e.point.x + 5, e.point.y + 5],
      ];
      // Find features intersecting the bounding box.
      const selectedFeatures = map.queryRenderedFeatures(bbox, {
        layers: ["trace2"],
      });

      if (selectedFeatures.length === 0) return;
      const coordinates = selectedFeatures[0].geometry.coordinates.slice();
      const description = selectedFeatures[0].properties.description;

      console.log(selected.current, "->", description);
      console.log(trace2);
      if (selected.current !== description) {
        selected.current = description;
      } else {
        // console.log(selectedFeatures[0])

        // console.log(trace2.features)
        // console.log(coordinates)

        const index = trace2.features.findIndex((el) => el.properties.description === description);

        console.log(trace, trace2);

        trace.features[0].geometry.coordinates.splice(index, 1);
        console.log(trace2.features.splice(index, 1));

        console.log(trace, trace2);

        map.getSource("trace").setData(trace);
        map.getSource("trace2").setData(trace2);
        selected.current = null;
      }
    });
  }, [map]);

  return null;
};
