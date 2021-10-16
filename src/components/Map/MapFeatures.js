import mapboxgl from "mapbox-gl";
import React, { useRef } from "react";
import { MapContext } from "react-mapbox-gl";

export const MapFeatures = (props) => {
  const map = React.useContext(MapContext);
  const deleteWaypoints = props.deleteWaypoints;
  const disabled = props.disabled;

  const selectedIndices = useRef(null);
  const points = useRef(null);
  const lines = useRef(null);

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
    selectedIndices.current = {};

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

  function destroy() {
    map.removeLayer("lines");
    map.removeSource("lines");
    map.removeLayer("points");
    map.removeSource("points");
    deselectAll();
    onChange([]);
  }

  function insertPointAt(index, coordinates) {
    points.current.features.splice(index, 0, addPoint(coordinates));
    lines.current.features[0].geometry.coordinates.splice(index, 0, coordinates);
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
      return getIndexOfTag(selectedFeatures[0].properties.tag);
    } else {
      return null;
    }
  }

  function getIndexOfTag(tag) {
    return points.current.features.findIndex((el) => el.properties.tag === tag);
  }

  function handleIndexSelect(index) {
    if (selectedIndices.current.a && selectedIndices.current.a.index === index) {
      removePointAt(index);
      deselectAll();
      return;
    }

    if (selectedIndices.current.b) {
      selectedIndices.current.b.marker.remove();
    }
    if (selectedIndices.current.a) {
      selectedIndices.current.b = selectedIndices.current.a;
    }

    const marker = new mapboxgl.Marker().setLngLat(points.current.features[index].geometry.coordinates).addTo(map);

    selectedIndices.current.a = { index, marker };
  }

  function performAction(coordinates) {
    const length = points.current.features.length;
    if (length === 0) {
      // place initial point
      insertPointAt(0, coordinates);
      handleIndexSelect(0);
    } else {
      if (Object.keys(selectedIndices.current).length === 2) {
        attemptToPlaceMidpoint(coordinates);
      } else if (Object.keys(selectedIndices.current).length === 1) {
        attemptToExtendFromEndpoints(coordinates);
      } else {
        map.panTo(points.current.features[0].geometry.coordinates);
      }
    }
  }

  function attemptToPlaceMidpoint(coordinates) {
    let indexA = selectedIndices.current.a.index;
    let indexB = selectedIndices.current.b.index;

    if (indexA > indexB) {
      [indexA, indexB] = [indexB, indexA];
    }

    if (indexB - indexA === 1) {
      insertPointAt(indexB, coordinates);
      deselectAll();
    }
  }

  function attemptToExtendFromEndpoints(coordinates) {
    const length = points.current.features.length;
    if (selectedIndices.current.a.index === points.current.features.length - 1) {
      insertPointAt(length, coordinates);
      deselectAll();
      handleIndexSelect(length);
    } else if (selectedIndices.current.a.index === 0) {
      insertPointAt(0, coordinates);
      deselectAll();
      handleIndexSelect(0);
    }
  }

  function deselectAll() {
    if (selectedIndices.current.a) {
      selectedIndices.current.a.marker.remove();
    }
    if (selectedIndices.current.b) {
      selectedIndices.current.b.marker.remove();
    }
    selectedIndices.current = {};
  }

  function downHandler(event) {
    if (event.keyCode === 27) {
      deselectAll();
    }
  }

  function leftClickHandler(e) {
    const index = findPointFeature(e);
    if (index !== null) {
      handleIndexSelect(index);
    } else {
      performAction([e.lngLat.lng, e.lngLat.lat]);
    }
  }

  function rightClickHandler() {
    map.setBearing(0);
    map.setPitch(0);
  }

  React.useEffect(() => {
    if (!map || disabled) {
      return;
    }

    init();
    map.on("click", leftClickHandler);
    map.on("contextmenu", rightClickHandler);
    window.addEventListener("keydown", downHandler);

    return () => {
      map.off("click", leftClickHandler);
      map.off("contextmenu", rightClickHandler);
      window.removeEventListener("keydown", downHandler);
      destroy();
    };
  }, [map, deleteWaypoints, disabled]);

  return null;
};
