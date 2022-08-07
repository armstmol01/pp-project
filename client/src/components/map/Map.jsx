import React from 'react'
import './Map.css';
import { MapContainer, TileLayer} from "react-leaflet";
import { Polyline } from 'react-leaflet/Polyline'
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  let mapData = props.data;

  return (
    <div className="strava__container">
      {mapData.lines.length===0?'Loading...':
      <div className='map__container'>
        <MapContainer
        center={mapData.center}
        zoom={14}
        scrollWheelZoom={false}
        bounds={[mapData.lines[0], mapData.lines[mapData.lines.length - 1]]}
        className="map"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" className="tiles"
          />
          <Polyline
          pathOptions={{ color: "#ff9900" }}
          positions={mapData.lines} />
        </MapContainer>
      </div>}
    </div>
);
}

export default Map