import React, { useEffect, useState } from 'react';
import { geolocated } from 'react-geolocated';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import "./App.css"
import {iconPerson} from "./customIcon"
const App = (props) => {
  const defaultLat=35.5;
  const defaultlog=51.5;
  const latitude=props.coords ? props.coords.latitude : defaultLat;
  const longitude=props.coords ? props.coords.longitude : defaultlog
  // console.log(lat,lon,"lat")
  const [position, setPosition] = useState(null)
  const LocationMarker=()=> {
    console.log(position)
  const map = useMapEvents({
    click() {
      map.locate()
      console.log( map.locate()," map.locate()")
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position}
    icon={iconPerson}
    >
      <Popup>You are here</Popup>
    </Marker>
  )}

  return ( 
    
    <MapContainer center={[latitude,longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LocationMarker/>
</MapContainer>
    
   

   );
}
 
export default geolocated({ 
  positionOptions:{
    enableHighAccuracy:false,
  },
  userDecisionTimeout:10000,
  
})(App)