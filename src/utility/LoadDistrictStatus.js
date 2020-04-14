const LoadDistrictStatus = (map, statusOf) => {
  let textField = "";
  let url = "";
  let color = "";

  if (statusOf === "pui") {
    textField = "total_pui";
    color = "#f2a365";
    url =
      "https://raw.githubusercontent.com/noeltech/villa-route.geojson/master/district_pui.geojson";
  } else if (statusOf === "pum") {
    textField = "total_pum";
    color = "#30475e";
    url =
      "https://raw.githubusercontent.com/noeltech/villa-route.geojson/master/district_pum.geojson";
  }

  map.addSource(textField, {
    type: "geojson",
    data: url,
  });
  map.addLayer({
    id: `${statusOf}_circle`,
    type: "circle",
    source: textField,

    paint: {
      "circle-color": color,
      "circle-opacity": 1,
      "circle-radius": 20,
    },
  });
  map.addLayer({
    id: `${statusOf}_lable`,
    type: "symbol",
    source: textField,
    layout: {
      "text-field": ["to-string", ["get", textField]],
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-size": 18,
    },
    paint: {
      "text-color": "white",
    },
  });
};

export default LoadDistrictStatus;
