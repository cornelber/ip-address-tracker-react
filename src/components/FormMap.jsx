import React, {useState, useEffect, useContext} from 'react'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { MyContext } from '../contexts/MyContextProvider';

const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ZOOM_LEVEL = 9;


const FormMap = () => {
    const [map, setMap] = useState([])
    const [newCoordinates, setNewCoordinates] = useState(null)
    const temporaryCenter = [40.650002, -73.949997];
    const { value } = useContext(MyContext)
    const icon = new L.Icon({
        iconUrl: require('../assets/icon-location.png'),
        iconSize: [46, 56],
    })

    useEffect(() => {
        if(value) {
            map.flyTo([value.coordinates.lat, value.coordinates.lng], 9)
            setNewCoordinates([value.coordinates.lat, value.coordinates.lng])
        }
    }, [value]);

    return (
        <div className='form-map'>
        <MapContainer center={temporaryCenter} zoom={ZOOM_LEVEL} ref={setMap}>
            <TileLayer attribution={TILE_ATTRIBUTION} url={TILE_URL} />
            <Marker position={!newCoordinates ? temporaryCenter : newCoordinates} icon={icon} />
        </MapContainer>
        </div>
    )
}

export default FormMap