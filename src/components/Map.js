import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import LoadDistrictStatus from "../utility/LoadDistrictStatus";
import PumPuiLegend from "./PumPuiLegend";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9lbHRlY2giLCJhIjoiY2o1dXByYjYxMXJmMTJ3bWxjZXo5YzkydCJ9.ic11CV05aSv7rYdx22nSDw";

export default function Mapbox(props) {
  const [map, setMap] = useState(null);

  const mapContainer = useRef(null);

  console.log("Maps Renders");

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/noeltech/ck8vb87cp0qg71ip3112pglky", // stylesheet location

      center: [122.551, 10.712],
      zoom: 12.8,
      bearing: -20,
      pitch: 40,
    });

    setMap(map);
    map.on("load", () => {
      // Load the PUMand PUI status per district
      map.resize();
      LoadDistrictStatus(map, "pui");
      LoadDistrictStatus(map, "pum");
    });
  }, []);

  useEffect(() => {
    if (map) {
      map.flyTo({
        center: props.district,
        zoom: 13.5,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }, [props.district]);

  return (
    <Wrapper>
      <Map ref={(el) => (mapContainer.current = el)} />
      <PumPuiLegend />
    </Wrapper>
  );
}

const Map = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  height: 777px;
  width: 100%;
  @media (max-width: 660px) {
    height: 80vh;
  }
`;
