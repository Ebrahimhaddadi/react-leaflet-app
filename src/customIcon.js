import L from 'leaflet';
import myicon from "./map-icon.png"

const iconPerson = new L.Icon({
    iconUrl: myicon,
    iconRetinaUrl: myicon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 40),
    className: 'leaflet-div-icon'
});

export { iconPerson };