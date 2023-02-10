import React, {useState, useEffect, useContext} from 'react'
import { MyContext } from '../contexts/MyContextProvider'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { mapConstants, iconMapConstants } from '../common/constants/mapConstants'

import 'leaflet/dist/leaflet.css'


const FormMap = () => {
    const { addressCoords } = useContext(MyContext)
    const [initialRender, setInitialRender] = useState(true);
    const [newCoordinates, setNewCoordinates] = useState(null)
    const [map, setMap] = useState([])
    const { lat, lng } = addressCoords

    const marker = new L.Icon(iconMapConstants)
    const markerPosition = !newCoordinates ? mapConstants.CENTER : newCoordinates

    // update the map with the new coordinates when the addressCoords change
    useEffect(() => {
        if(!initialRender) {
            if(addressCoords && map) {
                map.flyTo([lat, lng])
                setNewCoordinates([lat, lng])
            }
        } else {
            setInitialRender(false)
        }
    }, [initialRender, addressCoords, map, lat, lng])


    return (
        <div className='form-map'>
        <MapContainer center={mapConstants.CENTER} zoom={mapConstants.ZOOM_LEVEL} ref={setMap}>
            <TileLayer attribution={mapConstants.TILE_ATTRIBUTION} url={mapConstants.TILE_URL} />
            <Marker position={markerPosition} icon={marker} />
        </MapContainer>
        </div>
    )
}

export default FormMap