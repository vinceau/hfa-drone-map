import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MapContext } from "react-mapbox-gl";

export const MapFeatures = (props) => {
  const map = React.useContext(MapContext);

  const points = useRef(null);
  const lines = useRef(null);
  const selectedIndex = useRef(null);
  const selectMarker = useRef(null);

  const onChange = (data) => {
    const res = data.map(([long, lat]) => ({ long, lat }));
    if (props.onChange) {
      props.onChange(res);
    }
  };

  function addPoint(coordinates) {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates,
      },
      properties: {
        description: "<p>" + JSON.stringify(coordinates) + "</p>",
        tag: JSON.stringify(coordinates),
      },
    };
  }

  function init() {
    lines.current = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [],
          },
        },
      ],
    };

    points.current = {
      type: "FeatureCollection",
      features: [],
    };

    map.addSource("lines", { type: "geojson", data: lines.current });
    map.addSource("points", { type: "geojson", data: points.current });

    map.addLayer({
      id: "lines",
      type: "line",
      source: "lines",
      paint: {
        "line-color": "yellow",
        "line-opacity": 0.75,
        "line-width": 5,
      },
    });

    map.addLayer({
      id: "points",
      type: "circle",
      source: "points",
      paint: {
        "circle-radius": 6,
        "circle-color": "#B42222",
      },
    });
  }

  function getIndexOfTag(tag) {
    return points.current.features.findIndex((el) => el.properties.tag === tag);
  }

  function insertPointAt(index, coordinates) {
    points.current.features.splice(index, 0, addPoint(coordinates));
    lines.current.features[0].geometry.coordinates.splice(index, 0, coordinates);
    refreshMap();
    onChange(lines.current.features[0].geometry.coordinates);
  }

  function addPointToEnd(coordinates) {
    points.current.features.push(addPoint(coordinates));
    lines.current.features[0].geometry.coordinates.push(coordinates);
    refreshMap();
    onChange(lines.current.features[0].geometry.coordinates);
  }

  function removePointAt(index) {
    points.current.features.splice(index, 1);
    lines.current.features[0].geometry.coordinates.splice(index, 1);
    refreshMap();
    onChange(lines.current.features[0].geometry.coordinates);
  }

  function refreshMap() {
    map.getSource("lines").setData(lines.current);
    map.getSource("points").setData(points.current);
  }

  function findPointFeature(e) {
    const [x, y] = [e.point.x, e.point.y];

    const selectedFeatures = map.queryRenderedFeatures(
      [
        [x - 5, y - 5],
        [x + 5, y + 5],
      ],
      {
        layers: ["points"],
      },
    );

    if (selectedFeatures.length > 0) {
      return {
        coordinates: selectedFeatures[0].geometry.coordinates.slice(),
        description: selectedFeatures[0].properties.description,
        tag: selectedFeatures[0].properties.tag,
      };
    } else {
      return {};
    }
  }

  function setSelectedIndex(index) {
    selectedIndex.current = index;
    // console.log('hi')
    // if (index === null) return
    // const marker = new mapboxgl.Marker()
    //   .setLngLat(points.current.features[index].geometry.coordinates)
    //   .addTo(map);
  }

  function getSelectedIndex() {
    return selectedIndex.current;
  }

  React.useEffect(() => {
    if (!map) {
      return;
    }

    init();

    map.on("click", (e) => {
      const { coordinates, description, tag } = findPointFeature(e);

      if (coordinates && description && tag) {
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
      } else {
        const { lng, lat } = e.lngLat;

        if (getSelectedIndex() !== null) {
          insertPointAt(getSelectedIndex() + 1, [lng, lat]);
        } else {
          addPointToEnd([lng, lat]);
        }
        setSelectedIndex(null);
      }
    }); // click

    map.on("contextmenu", (e) => {
      const { tag } = findPointFeature(e);

      if (!tag) return;

      const index = getIndexOfTag(tag);

      if (getSelectedIndex() !== index) {
        selectedIndex.current = index;
      } else {
        removePointAt(getSelectedIndex());
        setSelectedIndex(null);
      }
    }); // contextmenu
  }, [map]);

  return null;
};
