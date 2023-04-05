import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 35.715298,
    longitude: 51.404343,
    zoom: 14,
  });

  const MAPBOX_TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjljZGQ1OTA2M2QxNjMyY2VjOTczYzJhYTc3ZjNlZTM1NWMyYTY5Y2ExZjJkYzczOTM2YTBlOThmMTA4MDk4ZGZkMWU0N2ZlMTVlNWI2YzZjIn0.eyJhdWQiOiIyMTcwMiIsImp0aSI6IjljZGQ1OTA2M2QxNjMyY2VjOTczYzJhYTc3ZjNlZTM1NWMyYTY5Y2ExZjJkYzczOTM2YTBlOThmMTA4MDk4ZGZkMWU0N2ZlMTVlNWI2YzZjIiwiaWF0IjoxNjgwNTExMTEzLCJuYmYiOjE2ODA1MTExMTMsImV4cCI6MTY4MzEwMzExMywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.liSv3CaJ4hiwJCRpu9SIo2wXO-brGdt1HTdokgQxzfyZJuyC82Wr5A69uePIODuAj13dGM7Jf1-YUT9CEBfM-TBy04qw1qxyMIpfIiBatynO3NWNCFV-gi4bDBTsCEuu0Ruvux3G0EKvJd99gGIDBExR8uCobIRCpjsAMwzGSNq8dvUe8OiCqYtIb1-EfXO_ITazNt-84ypy70NAZtMJbqeNW2JGQbdD4ufobRN_KEoFBCWk5zfhpHjJC9J56K66x1ykv3qS7wBdZ7mVBpkwyRj4wo6LcSs4qZ3bQA45OVQ7gdg-xGHAgZ912iieLIs5F5S5C5f_Arlq93nArw6Vag";

  return (
    <ReactMapGL
    mapboxApiAccessToken={MAPBOX_TOKEN}
    {...viewport}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="https://map.ir/vector/styles/main/mapir-xyz-light-style.json"
    />
  );
}

export default Map;
