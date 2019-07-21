import React, { useState } from "react";
import PlayerAPI from "../api";
import { Link } from "react-router-dom";

import MapGL from "@urbica/react-map-gl";
import Draw from "@urbica/react-map-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = props => {
  const [setFeatures, features] = useState(0);

  const MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoibGFyc2RpIiwiYSI6ImNqZTQ5cHRjdDF2eWQyd3F0MXl5dDZhMGgifQ.KrSIPFSe8YPpKu8YLVs8ZA";
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      <div>Serviceregion</div>
      <MapGL
        style={{ width: "100%%", height: "600px" }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={37.78}
        longitude={-122.41}
        zoom={11}
      >
        <Draw
          onDrawCreate={({ features }) => setFeatures(features)}
          onDrawUpdate={({ features }) => setFeatures(features)}
        />
      </MapGL>
      <div>{JSON.stringify(features)}</div>

      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Player;
